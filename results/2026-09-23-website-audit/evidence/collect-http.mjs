// Bounded, read-only public HTTP evidence collection. Run with Node 22+.
import {writeFile} from 'node:fs/promises';
const pages = [
  ['hikari-home','https://hikarisojo.com/'],
  ['hikari-menu','https://hikarisojo.com/menu'],
  ['hikari-robots','https://hikarisojo.com/robots.txt'],
  ['hikari-sitemap','https://hikarisojo.com/sitemap.xml'],
  ['saffron-home','https://saffronvalleysouthjordan.com/'],
  ['saffron-menu','https://saffronvalleysouthjordan.com/menu'],
  ['saffron-robots','https://saffronvalleysouthjordan.com/robots.txt'],
  ['saffron-sitemap','https://saffronvalleysouthjordan.com/sitemap.xml']
];
const attrs = s => Object.fromEntries([...s.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map(m=>[m[1],m[2]]));
const clean = s => s.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const rows = await Promise.all(pages.map(async ([id,url])=>{
  const start = Date.now();
  try {
    const r = await fetch(url,{signal:AbortSignal.timeout(35000)});
    const headersMs = Date.now()-start;
    const html = await r.text();
    const row = {id,url,finalUrl:r.url,status:r.status,headersMs,totalMs:Date.now()-start,decodedBytes:Buffer.byteLength(html),headers:Object.fromEntries(['content-type','cache-control','server','content-encoding','x-robots-tag'].map(k=>[k,r.headers.get(k)]))};
    if(id.endsWith('robots') || id.endsWith('sitemap')) {
      row.body=html;
    } else {
      row.title=clean(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]||'');
      row.meta=[...html.matchAll(/<meta\b[^>]*>/gi)].map(m=>attrs(m[0]));
      row.links=[...html.matchAll(/<link\b[^>]*>/gi)].map(m=>attrs(m[0]));
      row.headings=[...html.matchAll(/<(h[1-3])\b[^>]*>([\s\S]*?)<\/\1>/gi)].map(m=>({tag:m[1],text:clean(m[2])}));
      row.scripts=[...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)].map(m=>({attributes:attrs(m[1]),bytes:Buffer.byteLength(m[2]),...(m[2].includes('click_order_online')?{conversionSnippet:m[2]}:{})}));
      row.schema=[...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(m=>{try{return JSON.parse(m[1])}catch{return {parseError:true}}});
      row.anchors=[...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].map(m=>({...attrs(m[1]),text:clean(m[2])}));
      row.images=[...html.matchAll(/<img\b[^>]*>/gi)].map(m=>attrs(m[0]));
      row.video=[...html.matchAll(/<(?:video|source)\b[^>]*>/gi)].map(m=>m[0]);
      row.menuNamesInInitialHTML={gyoza:html.includes('Gyoza'),flaresOfHikari:html.includes('Flares of Hikari'),butterChicken:html.includes('Butter Chicken')};
    }
    return row;
  } catch(e) { return {id,url,error:String(e)}; }
}));
await writeFile(new URL('http-evidence.json',import.meta.url),JSON.stringify({capturedAt:new Date().toISOString(),method:'Uncached Node fetch, no JavaScript rendering. Timings are single local HTTP observations, not Lighthouse or Core Web Vitals.',pages:rows},null,2));
console.log(JSON.stringify(rows.map(({id,status,decodedBytes,totalMs,error,headings,body})=>({id,status,decodedBytes,totalMs,error,headings:headings?.slice(0,4),body:body?.slice(0,700)})),null,2));
