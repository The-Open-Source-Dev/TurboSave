// SPDX-License-Identifier: GPL-3.0-only
import {createHash} from 'node:crypto';
import {readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
const names=['yt-dlp','ffmpeg','ffprobe','node'];
export async function writeEngineManifest(root,lock){
  const engines={};
  for(const name of names){const bytes=await readFile(path.join(root,'vendor','bin',name+'.exe'));if(bytes.toString('ascii',0,2)!=='MZ')throw Error('Invalid engine: '+name);engines[name]={bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')};}
  if(engines['yt-dlp'].sha256!==lock.yt.sha256)throw Error('Downloader differs from its publisher checksum.');
  await writeFile(path.join(root,'build-resources','engines-manifest.json'),JSON.stringify({version:1,publishers:lock,engines},null,2)+'\n');
}
export async function verifyEngineManifest(root){
  const manifest=JSON.parse(await readFile(path.join(root,'build-resources','engines-manifest.json'),'utf8'));
  const lock=JSON.parse(await readFile(path.join(root,'engines.lock.json'),'utf8'));
  if(manifest.version!==1||JSON.stringify(manifest.publishers)!==JSON.stringify(lock))throw Error('Trusted engine manifest is stale. Run npm run tools:prepare and review its changes.');
  for(const name of names){
    const engine=manifest.engines[name];
    if(!Number.isSafeInteger(engine?.bytes)||engine.bytes<=0||!/^[a-f0-9]{64}$/.test(engine.sha256))throw Error('Invalid trusted engine record: '+name);
  }
  if(manifest.engines['yt-dlp'].sha256!==lock.yt.sha256)throw Error('Downloader checksum differs from the engine lock.');
}
