import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {test} from 'node:test';
const root=new URL('../',import.meta.url);
const text=p=>readFile(new URL(p,root),'utf8');
test('home promotes released game and canonical PC, combat, buying and achievement intents',async()=>{
 const home=await text('dist/index.html');assert.match(home,/Available now/);
 for(const path of ['pc-requirements','combat-system','release-date','mortal-shell-2-missable-achievements','beginner-guide','shells','weapons','bosses']) assert.ok(home.includes(`href="/${path}/"`),path);
 assert.doesNotMatch(home,/Mortal Shell 2 launches August 20, 2026/);
});
test('PC requirements render real hardware floor with a visible image',async()=>{
 const h=await text('dist/pc-requirements/index.html');
 for(const fact of ['i7-10700K','Ryzen 5 3600','16 GB RAM','2060 SUPER','RX 6600','70 GB','SSD required'])assert.ok(h.includes(fact),fact);
 assert.match(h,/<img[^>]+src="\/images\/mortalshell2-shell-greatsword-closeup\.webp"/);
 assert.doesNotMatch(h,/Last verified|beta-settings/i);
});
test('historical beta and old settings resolve to current installation and diagnosis',async()=>{
 const map=JSON.parse(await text('src/data/content-redirects.json'));
 assert.equal(map['/open-beta/'],'/download/#compare-the-recorded-beta-with-a-retail-installation');
 assert.equal(map['/pc-settings/'],'/pc-requirements/#record-the-failure-before-changing-settings');
 for(const id of ['open-beta','pc-settings','launch-day-checklist']) await assert.rejects(access(new URL(`dist/${id}/index.html`,root)));
 const h=await text('dist/download/index.html');assert.match(h,/Beta/);assert.match(h,/2584270/);
});
test('category hubs retain distinct identities, real assets and useful linked guides',async()=>{
 const titles=[];
 for(const slug of ['weapons','shells','bosses']){
   const h=await text(`dist/${slug}/index.html`);titles.push(h.match(/<title>(.*?)<\/title>/)?.[1]);
   assert.match(h,/<h1[^>]*>/);assert.match(h,/<img[^>]+src="\/images\//);
   assert.doesNotMatch(h,/pre-release (arsenal|Mortal Shell II boss) tracker|This page is a <strong>pre-release tracker/i);
   assert.ok(h.includes(`href="https://mortalshell2.wiki/${slug}/"`));
 }
 assert.equal(new Set(titles).size,3);
});
test('homepage retains local gameplay video with deliberate loading',async()=>{
 const h=await text('dist/index.html');assert.match(h,/Mortal Shell II Gameplay Video/);
 assert.match(h,/src="\/videos\/mortal-shell-2-gameplay\.webm"/);assert.match(h,/preload="none"/);
 await access(new URL('public/videos/mortal-shell-2-gameplay.webm',root));
});
test('home facts and guide collection do not regress to a future launch tracker',async()=>{
 const home=await text('dist/index.html'),guide=await text('dist/guide/index.html');
 assert.match(home,/Mortal Shell II at a Glance/);assert.match(guide,/latest-guides/);
 assert.doesNotMatch(home,/Three are named so far|remaining five/i);
 assert.doesNotMatch(guide,/Pre-release pages only/);
 const schemas=[...guide.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));
 assert.ok(schemas.some(s=>s['@graph']?.some(n=>n['@type']==='CollectionPage')));
});
