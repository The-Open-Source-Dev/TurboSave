# Third-party software

The original TurboSave Desktop code is GPL-3.0-only. Third-party projects retain their own copyrights and licenses. Bundling does not relicense them.

| Component | Role | Upstream and license |
| --- | --- | --- |
| Electron 45.0.0 | Desktop runtime | https://github.com/electron/electron — MIT plus Chromium/Node and other notices included by Electron |
| yt-dlp | Media extraction and download | https://github.com/yt-dlp/yt-dlp — source Unlicense; the publisher's standalone executable includes GPLv3+ components. TurboSave fetches it from the publisher. |
| FFmpeg / FFprobe | Local merging, conversion and verification | https://ffmpeg.org — the selected Gyan essentials build is GPL-enabled. Build information is at https://github.com/GyanD/codexffmpeg/releases/tag/9.0.2; exact flags can be obtained with ffmpeg -buildconf. |
| Node.js 24 LTS | JavaScript runtime for yt-dlp | https://github.com/nodejs/node — MIT and included third-party notices. TurboSave fetches it from the publisher. |
| electron-builder / NSIS | Build and installer tools | https://github.com/electron-userland/electron-builder — MIT; https://nsis.sourceforge.io/License |

`engines.lock.json` records the exact downloader/runtime versions, checksums and publisher URLs. No external fonts, stock images or borrowed application artwork are used; the interface icon is original geometric artwork.

## Binary redistribution checklist

Distribute TurboSave's complete matching source, build scripts and license. Preserve the Electron runtime notices shipped beside the application. Starting in beta.6 the installer and portable package exclude external engines. First-launch setup downloads their pinned releases directly from the respective publishers. See the exact versions, hashes and source references in `engines.lock.json`.
