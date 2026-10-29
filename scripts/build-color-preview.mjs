import fs from 'node:fs';
const root=new URL('../',import.meta.url);
const read=p=>fs.readFileSync(new URL(p,root),'utf8');
let html=read('index.html');
// Private kitchen concepts only: do not change index.html or production assets.
const kitchenNames=['flares','gyoza-tsuma',null,'karaage','salmon','bento-serving'];
const kitchenAlts=['Close view of Flares of Hikari with seared salmon, roe and sauce','Golden crisp gyoza beside the pink dipping bowl',null,'Lemon squeezed over crisp chicken karaage','Close detail of Salmon Sunrise with lemon and salmon marbling','Hands gently setting the salmon bento on the table'];
if(kitchenNames.filter(Boolean).every(name=>fs.existsSync(new URL(`assets/images/generated/editorial/kitchen-v1/${name}-640.webp`,root)))){
 html=html.replace(/(<div class="photo-grid">)([\s\S]*?)(<\/div>)/,(_,start,grid,end)=>{
  let index=0;
  return start+grid.replace(/<picture>[\s\S]*?<\/picture>/g,original=>{
   const i=index++, name=kitchenNames[i];
   if(!name)return original;
   const base=`/assets/images/generated/editorial/kitchen-v1/${name}`;
   return `<picture><img src="${base}-640.webp" srcset="${base}-320.webp 320w, ${base}-640.webp 640w, ${base}-1280.webp 1280w" sizes="(max-width:760px) calc((100vw - 50px)/2), 33vw" width="1280" height="1280" alt="${kitchenAlts[i]}" loading="lazy" decoding="async"></picture>`;
  })+end;
 });
}
html=html.replace('<head>','<head><meta name="robots" content="noindex,nofollow">');
// The approved gallery owns these dishes; remove the redundant editorial reprise.
// Bento alternatives remain on disk, but the completed comparison is no longer shown.
// The restored sweets section uses distinct subjects and stays in the preview.
html=html.replace(/<link[^>]+href="\/css\/homepage.css[^>]*>/,'<style>'+read('css/homepage.css')+'</style>');
html=html.replace(/<script src="[^"]+" defer><\/script>/g,'');
const css=`
.color-lab{position:sticky;top:0;z-index:100;padding:12px 20px;background:#fffefa;border-bottom:1px solid #bbb8ad;color:#282e2c;font:14px/1.4 Inter,sans-serif;box-shadow:0 3px 12px #0000000d}
.color-lab-inner{max-width:1280px;margin:auto;display:flex;align-items:center;gap:18px;flex-wrap:wrap}.color-lab p{margin:0}.color-lab small{display:block;font-size:11px;color:#626660}.color-options{display:flex;gap:8px;flex-wrap:wrap}.color-options button{min-height:44px;padding:9px 13px;border:1px solid #b9c1bb;border-radius:6px;background:white;color:#282e2c;cursor:pointer}.color-options button[aria-pressed=true]{border:2px solid #282e2c;padding:8px 12px}.color-options i{display:inline-block;width:14px;height:14px;vertical-align:-2px;border-radius:50%;border:1px solid #0003;margin-right:7px}.color-jumps{display:flex;gap:14px;font-size:12px}.header{position:relative;top:auto}html{scroll-padding-top:180px}
html[data-panel=ivory]{--panel:#f6f0e3;--panel-text:#303833;--panel-muted:#525d55;--panel-line:#b5b8a8}
html[data-panel=ivory] .food-story{box-shadow:0 3px 8px -3px rgba(101,89,68,.12),0 12px 24px -12px rgba(101,89,68,.24)}
html[data-panel=ivory] .footer{--panel:#eee5d5}
@media(min-width:761px){html[data-panel=ivory] .spotlight{box-shadow:0 3px 8px -3px rgba(101,89,68,.12),0 12px 24px -12px rgba(101,89,68,.24)}}
html[data-panel=sand]{--panel:#e2d2b9;--panel-text:#38372f;--panel-muted:#545247;--panel-line:#aa9c85}
html[data-panel=clay]{--panel:#d4a392;--panel-text:#3b2a25;--panel-muted:#513c33;--panel-line:#9d7667}
html[data-panel]:not([data-panel=green]) .food-story,html[data-panel]:not([data-panel=green]) .footer,html[data-panel]:not([data-panel=green]) .spotlight-menu{background:var(--panel);color:var(--panel-text)}
html[data-panel]:not([data-panel=green]) .food-story .section-title{color:var(--panel-text)}
html[data-panel]:not([data-panel=green]) .food-story .section-copy,html[data-panel]:not([data-panel=green]) .footer p{color:var(--panel-muted)}
html[data-panel]:not([data-panel=green]) .spotlight-menu button{color:var(--panel-muted);border-bottom-color:var(--panel-line)}
html[data-panel]:not([data-panel=green]) .spotlight-menu button[aria-pressed=true]{color:var(--panel-text);border-bottom-color:var(--red)}
html[data-panel]:not([data-panel=green]) .spotlight-menu button[aria-pressed=true]::before{background:var(--red);box-shadow:none}
@media(max-width:760px){.color-lab{padding:10px 16px}.color-lab-inner{gap:8px}.color-lab p{width:100%;font-size:12px}.color-lab small{display:inline;margin-left:6px}.color-options{display:grid;grid-template-columns:1fr 1fr;width:100%;gap:6px}.color-options button{text-align:left;font-size:12px}.color-jumps{width:100%;justify-content:space-between}html{scroll-padding-top:200px}}
`;
const bar=`<aside class="color-lab" aria-label="Private color comparison"><div class="color-lab-inner"><p><strong>Color preview</strong><small>Private · live site unchanged</small></p><div class="color-options" role="group" aria-label="Panel color"><button data-panel-choice="green" aria-pressed="true"><i style="background:#183b37"></i>Current green</button><button data-panel-choice="ivory" aria-pressed="false"><i style="background:#f6f0e3"></i>Warm ivory</button><button data-panel-choice="sand" aria-pressed="false"><i style="background:#e2d2b9"></i>Soft sand</button><button data-panel-choice="clay" aria-pressed="false"><i style="background:#d4a392"></i>Muted clay</button></div><nav class="color-jumps" aria-label="Compare sections"><a href="#food-title">Food feature</a><a href="#kitchen">Most ordered</a><a href="#color-footer">Footer</a></nav></div></aside>`;
html=html.replace('</head>',`<style>${css}</style></head>`).replace('<body>','<body>'+bar).replace('<footer class="footer">','<footer class="footer" id="color-footer">');
html=html.replace('</body>',`<script>${read('js/homepage.js')}</script><script>
const choices=document.querySelectorAll('[data-panel-choice]');
function choose(value){document.documentElement.dataset.panel=value;choices.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.panelChoice===value)));history.replaceState(null,'','?panel='+value+location.hash);}
choices.forEach(b=>b.addEventListener('click',()=>choose(b.dataset.panelChoice)));
const selected=new URLSearchParams(location.search).get('panel');choose(['green','ivory','sand','clay'].includes(selected)?selected:'green');
</script></body>`);
fs.writeFileSync(new URL('results/2026-09-23-website-audit/24-COLOR-PREVIEW.html',root),html);
console.log('Built private color comparison; no production files changed.');
