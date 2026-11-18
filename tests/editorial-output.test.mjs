import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import test from 'node:test';
const dist=new URL('../dist/',import.meta.url);
async function all(dir=dist){let a=[];for(const e of await readdir(dir,{withFileTypes:true})){const u=new URL(e.name+(e.isDirectory()?'/':''),dir);if(e.isDirectory())a.push(...await all(u));else if(e.name.endsWith('.html'))a.push(u);}return a;}
test('pages expose truthful independent identity and policies',async()=>{for(const f of await all()){const h=await readFile(f,'utf8');assert.match(h,/Unofficial fan site\. Not affiliated with Cold Symmetry or Playstack\./);for(const p of ['about','contact','privacy','terms','editorial'])assert.ok(h.includes(`href="/${p}/"`));assert.doesNotMatch(h,/Last verified|>Beta-tested<|Personally verified|googletagmanager\.com\/gtag\/js/);}});
test('privacy discloses actual hosting metrics and paused Google Analytics',async()=>{const h=await readFile(new URL('privacy/index.html',dist),'utf8');assert.match(h,/Cloudflare Web Analytics/);assert.match(h,/does not load Google Analytics/);assert.match(h,/does not currently serve advertising/);});
