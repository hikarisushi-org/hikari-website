const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(__dirname+'/square-receipt-handoff.html','utf8').replace(/<\/?script>/g,'');
function run({id='TEST_ORDER_123',marker={value:'public_website',expires:2000000},storage=new Map(),native=true,host='hikarisushi-online.square.site',now=1000000}={}){
  if(marker!==undefined)storage.set('hikari_journey_v1',JSON.stringify(marker));
  const calls=[],timers=[];
  const window={...(native?{gtag:(...args)=>calls.push(args)}:{})};
  const context={window,location:{hostname:host},Date:{now:()=>now},Number,sessionStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},setTimeout:fn=>timers.push(fn)};
  const execute=()=>vm.runInNewContext(source.replace('{orderid}',id),context);
  execute();return{calls,timers,window,execute,storage};
}
test('sends one explicit opaque-order evidence event and suppresses receipt reloads',()=>{
 const r=run();assert.equal(r.calls.length,1);
 const [command,name,params]=r.calls[0];
 assert.equal(command,'event');assert.equal(name,'hikari_order_handoff');
 assert.deepEqual(JSON.parse(JSON.stringify(params)),{send_to:'G-SH54LFXHJ3',transaction_id:'TEST_ORDER_123',hikari_order_id:'TEST_ORDER_123',hikari_journey:'public_website'});
 r.execute();assert.equal(r.calls.length,1);
 assert.ok(!source.includes("'purchase'"));
});
test('QR evidence stays separate; missing/expired/future/invalid marker or placeholder sends nothing',()=>{
 assert.equal(run({marker:{value:'qr_menu',expires:2000000}}).calls[0][2].hikari_journey,'qr_menu');
 for(const marker of [null,{value:'public_website',expires:1000000},{value:'public_website',expires:3000000},{value:'public_website',expires:'2000000'},{value:'fake',expires:2000000}])assert.equal(run({marker}).calls.length,0);
 for(const id of ['{orderid}','abc','customer@example.com'])assert.equal(run({id}).calls.length,0);
 assert.equal(run({host:'example.com'}).calls.length,0);
});
test('waits briefly for existing native tag without loading or replacing it',()=>{
 const r=run({native:false});assert.equal(r.calls.length,0);assert.equal(r.timers.length,1);
 r.window.gtag=(...args)=>r.calls.push(args);r.timers.shift()();assert.equal(r.calls.length,1);
 const absent=run({native:false});let iterations=0;while(absent.timers.length){absent.timers.shift()();iterations++;assert.ok(iterations<20);}
 assert.equal(absent.calls.length,0);assert.equal(absent.window.gtag,undefined);
});
