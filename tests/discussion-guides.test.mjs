import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { test } from 'node:test';
const root = new URL('../', import.meta.url);
const text = p => readFile(new URL(p,root),'utf8');
const redirects = JSON.parse(await text('src/data/content-redirects.json'));
test('discussion intents resolve to focused current references without duplicate articles', async()=>{
  const expected={
    '/mortal-shell-2-beta-save-missing/':'/download/#compare-the-recorded-beta-with-a-retail-installation',
    '/mortal-shell-2-language-support/':'/pc-requirements/#record-the-failure-before-changing-settings',
    '/mortal-shell-2-great-martyrs-blade-patch/':'/mortal-shell-2-best-weapon/#weapon-changes-worth-knowing'
  };
  for(const [from,to] of Object.entries(expected)){
    assert.equal(redirects[from],to);
    await assert.rejects(access(new URL('src/content/guides'+from.slice(0,-1)+'.md',root)));
    await assert.rejects(access(new URL('dist'+from+'index.html',root)));
    const [path,anchor]=to.split('#');
    const html=await text('dist'+path+'index.html');
    assert.ok(html.includes(`id="${anchor}"`),to);
    assert.ok(html.includes(`rel="canonical" href="https://mortalshell2.wiki${path}"`));
  }
});
test('retained balance history preserves real weapon and economy changes',async()=>{
  const balance=await text('src/content/guides/mortal-shell-2-balance-patch-1.md');
  assert.match(balance,/Great Martyr.?s Blade Attack Damage \+20%/i);
  assert.match(balance,/Smelting a weapon at the Tarforge costs 75% less gloom/i);
  assert.match(balance,/sourceUrl:\s*["']https?:\/\//);
  const download=await text('src/content/guides/download.md');
  assert.match(download,/not transfer|reset|carry over/i);
  const pc=await text('src/content/guides/pc-requirements.md');
  assert.match(pc,/16 GB RAM/);assert.match(pc,/70 GB/);assert.match(pc,/SSD required/);
});
