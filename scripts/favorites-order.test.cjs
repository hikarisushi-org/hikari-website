const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const analytics=require('../js/site-actions.js');
const expected=[
 ['firefly','6CUX3EPJBT6OWBYLJBCHKWY6','Firefly Fusion'],
 ['citrus-mango','6NNRTH56UWVBT3ZPGTQUQJAN','Citrus Mango Dream'],
 ['playboy','U3GSBD5J7FKYQD53JPC5H76F','Playboy'],
 ['strawberry','T3HTL25YFL2DEN7JPYJNWUJG','Strawberry Blossom'],
 ['hot-cheetos','K6LF4OVX3I37JH3OTDRN5IH4','Hot Cheetos Roll']
];
function node(){return {dataset:{},handlers:{},attrs:{},classList:{add(){},toggle(){}},addEventListener(n,f){this.handlers[n]=f;},setAttribute(n,v){this.attrs[n]=v;}};}
function fixture(){
 const calls=[];
 const rows=[...html.matchAll(/<figure class="spotlight-slide[^"\n]*" data-roll="([^"]+)" data-square-item="([^"]+)"[\s\S]*?<figcaption>([^<]+)<\/figcaption>/g)].map(m=>m.slice(1));
 assert.deepEqual(rows,expected,'all five actual markup IDs match verified catalog');
 const slides=rows.map(([slug,id,name],i)=>({...node(),dataset:{roll:slug,squareItem:id},offsetLeft:i*350,querySelector:()=>({textContent:name})}));
 const buttons=rows.map(()=>node());const previous=node(),next=node(),counter={};
 const controls={...node(),querySelectorAll:()=>[previous,next],querySelector:()=>counter};
 const stage={...node(),scrollLeft:0,scrollTo({left}){this.scrollLeft=left;this.handlers.scroll?.();}};
 const link={...node(),href:'https://hikarisushi-online.square.site/?location=LMCJ08MMKDHCA&item='+expected[0][1]+'&hikari_entry=public_website&_gl=existing-linker',dataset:{analyticsPlacement:'favorites',itemListId:'homepage_favorites',orderItem:expected[0][2]}};
 link.parentElement={append(){}};
 const spotlight={querySelectorAll:s=>s.includes('button')?buttons:slides,querySelector:()=>stage,append(){},closest:()=>({querySelector:()=>link})};
 const mobile={matches:false,addEventListener(n,f){this.change=f;}};
 const doc={documentElement:{dataset:{}},hidden:false,addEventListener(){},createElement:()=>controls,
  querySelector:s=>s==='.deck-stage'?null:node(),querySelectorAll:()=>[spotlight]};
 const context={document:doc,window:{gtag:(...x)=>calls.push(x)},location:{hostname:'hikarisojo.com'},
  matchMedia:q=>q.includes('max-width')?mobile:{matches:true},URL,Date,Set,
  requestAnimationFrame:f=>f(),setTimeout:()=>1,clearTimeout(){}};
 vm.runInNewContext(fs.readFileSync(path.join(root,'js/homepage.js'),'utf8'),context);
 return {buttons,link,mobile,stage,next,previous,calls};
}
test('default and each roll selection update real anchor before any navigation',()=>{
 const f=fixture();assert.equal(f.calls.length,0,'default is not a browse selection');
 for(let i=0;i<expected.length;i++){
  f.buttons[i].handlers.click();const url=new URL(f.link.href);
  assert.equal(url.searchParams.get('item'),expected[i][1]);
  assert.equal(url.searchParams.get('location'),'LMCJ08MMKDHCA');
  assert.equal(url.searchParams.get('hikari_entry'),'public_website');
  assert.equal(url.searchParams.get('_gl'),'existing-linker');
  assert.equal(f.link.dataset.orderItem,expected[i][2]);
  assert.equal(f.link.attrs['aria-label'],'Order '+expected[i][2]);
 }
});
test('mobile scroll and arrow navigation order the visible roll, not the old selection',()=>{
 const f=fixture();f.mobile.matches=true;f.mobile.change();
 f.next.handlers.click();assert.equal(f.link.textContent,'Order Citrus Mango Dream');assert.equal(new URL(f.link.href).searchParams.get('item'),expected[1][1]);
 f.stage.scrollLeft=1050;f.stage.handlers.scroll();assert.equal(f.link.dataset.orderItem,'Strawberry Blossom');
 f.previous.handlers.click();assert.equal(f.link.dataset.orderItem,'Playboy');
});
test('order event carries exact destination ID and list, without inventing purchase or cart',()=>{
 const f=fixture();f.buttons[1].handlers.click();const events=[];
 analytics.handleClick({target:{closest:()=>f.link}},(...x)=>events.push(x),{pathname:'/'});
 assert.equal(events.length,1);assert.equal(events[0][1],'click_order_online');
 assert.equal(events[0][2].item_name,'Citrus Mango Dream');
 assert.equal(events[0][2].item_id,expected[1][1]);
 assert.equal(events[0][2].item_list_id,'homepage_favorites');
 assert(!events[0][2].link_url.includes('_gl'));
 const general={href:'https://hikarisushi-online.square.site/',dataset:{analyticsPlacement:'hero'}};
 assert.equal(analytics.buildEventParameters(general,{pathname:'/'}).item_id,undefined);
});
test('no-JavaScript anchor opens the first displayed roll and other CTAs stay general',()=>{
 const href=html.match(/href="([^"]+)" data-analytics-placement="favorites"/)[1].replaceAll('&amp;','&');
 assert.equal(new URL(href).searchParams.get('item'),expected[0][1]);
 assert.match(html,/href="https:\/\/hikarisushi-online.square.site\/" data-analytics-placement="hero"/);
});
