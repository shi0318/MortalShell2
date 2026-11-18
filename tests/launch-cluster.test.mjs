import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {test} from 'node:test';
const root=new URL('../',import.meta.url);
const text=p=>readFile(new URL(p,root),'utf8');
const redirects=JSON.parse(await text('src/data/content-redirects.json'));
const legacy=['difficulty-options','executions-heal','turn-off-the-sun','leveling-system','reset-shell-abilities','fragments-weapon-skills','weapon-upgrade-guide','melee-ranged-weapons','dungeons-open-world','how-many-dungeons','open-world-size','sidearms-and-ranged-combat','boss-difficulty','boss-runback','respawn-points','blurry-graphics-fix','reflex-stutter-fix','frame-generation-fix','engine-ini-settings','launch-bugs'];
test('twenty overlapping launch intents consolidate into usable canonical sections',async()=>{
 assert.equal(legacy.length,20);
 const rules=await text('public/_redirects');
 for(const suffix of legacy){
   const from=`/mortal-shell-2-${suffix}/`,to=redirects[from];
   assert.ok(to,from);assert.ok(rules.split(/\r?\n/).some(l=>l===`${from} ${to} 301`),from+' 301');
   await assert.rejects(access(new URL(`dist${from}index.html`,root)));
   await assert.rejects(access(new URL(`src/content/guides${from.slice(0,-1)}.md`,root)));
   const [path,anchor]=to.split('#');const h=await text(`dist${path}index.html`);
   assert.ok(h.includes(`href="https://mortalshell2.wiki${path}"`),to);
   if(anchor)assert.ok(h.includes(`id="${anchor}"`),to);
   assert.doesNotMatch(h,/<meta name="robots" content="noindex/);
 }
});
