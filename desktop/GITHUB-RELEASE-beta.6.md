## TurboSave Desktop 0.8.0-beta.6

Windows 10/11 x64. Use the setup executable for installation or the portable executable to run without installing the app.

### First launch

Connect to the internet and open TurboSave. Setup downloads verified copies of yt-dlp, FFmpeg, FFprobe and the Node.js helper directly from their publishers as needed. The tools are stored in TurboSave’s user data. If a connection fails, choose **Retry setup**. After setup, a compatible verified copy can be reused on later launches.

This is an unsigned beta. Check the published SHA-256 before running a download.

### Publishing

- Create a prerelease at tag `desktop-v0.8.0-beta.6`, pointing to the commit used for the source archive.
- Attach the setup executable, portable executable, matching desktop source archive and SHA-256 checksum file.
- Verify the download links when signed out, then link the release from the project homepage.

See [third-party notices](THIRD_PARTY_NOTICES.md) for software shipped inside the package and [the engine lockfile](engines.lock.json) for the first-launch downloads.
