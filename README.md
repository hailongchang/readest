<div align="center">
  <a href="https://readest.com?utm_source=github&utm_medium=referral&utm_campaign=readme" target="_blank">
    <img src="https://github.com/chrox/readest/blob/main/apps/readest-app/src-tauri/icons/icon.png?raw=true" alt="Readest Logo" width="20%" />
  </a>
  <h1>Readest</h1>
  <br>

[Readest][link-website] is an open-source ebook reader designed for immersive and deep reading experiences. Built as a modern rewrite of [Foliate](https://github.com/johnfactotum/foliate), it leverages [Next.js 15](https://github.com/vercel/next.js) and [Tauri v2](https://github.com/tauri-apps/tauri) to offer a seamless cross-platform experience on macOS, Windows, Linux and Web, with support for mobile platforms coming soon.

[![Website][badge-website]][link-website]
[![AGPL Licence][badge-license]](LICENSE)
[![OS][badge-platforms]][link-website]
[![][badge-discord]][link-discord]
<br>
[![Latest release][badge-release]][link-gh-releases]
[![Last commit][badge-last-commit]][link-gh-commits]
[![Commits][badge-commit-activity]][link-gh-pulse]

</div>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#planned-features">Planned Features</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#downloads">Downloads</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

<div align="center">
  <a href="https://readest.com" target="_blank">
    <img src="./data/screenshots/landing_page_preview.png" alt="Readest Banner" width="100%" />
  </a>
</div>

## Features

<div align="left">✅ Implemented</div>

| **Feature**                             | **Description**                                                                  | **Status** |
| --------------------------------------- | -------------------------------------------------------------------------------- | ---------- |
| **Multi-Format Support**                | Support EPUB, MOBI, KF8 (AZW3), FB2, CBZ, PDF (experimental)                     | ✅         |
| **Scroll/Page View Modes**              | Switch between scrolling or paginated reading modes.                             | ✅         |
| **Full-Text Search**                    | Search across the entire book to find relevant sections.                         | ✅         |
| **Annotations and Highlighting**        | Add highlights, bookmarks, and notes to enhance your reading experience.         | ✅         |
| **Excerpt Text for Note-Taking**        | Easily excerpt text from books for detailed notes and analysis.                  | ✅         |
| **Dictionary/Wikipedia Lookup**         | Instantly look up words and terms when reading.                                  | ✅         |
| **Translate with DeepL**                | Translate selected text instantly using DeepL for accurate translations.         | ✅         |
| **[Parallel Read][link-parallel-read]** | Read two books or documents simultaneously in a split-screen view.               | ✅         |
| **Customize Font and Layout**           | Adjust font, layout, theme mode, and theme colors for a personalized experience. | ✅         |
| **File Association and Open With**      | Quickly open files in Readest in your file browser with one-click.               | ✅         |

## Planned Features

<div align="left">🛠 Building</div>
<div align="left">🔄 Planned</div>

| **Feature**                      | **Description**                                                                            | **Priority** |
| -------------------------------- | ------------------------------------------------------------------------------------------ | ------------ |
| **Support iOS and Android**      | Expand the APP to work on iOS and Android devices.                                         | 🛠           |
| **Sync Across Platforms**        | Synchronize reading progress, notes, and bookmarks across all supported platforms.         | 🛠           |
| **Sync with Koreader**           | Synchronize reading progress, notes, and bookmarks with [Koreader][link-koreader] devices. | 🔄           |
| **Library Management**           | Organize, sort, and manage your entire ebook library.                                      | 🔄           |
| **Support OPDS/Calibre**         | Integrate OPDS/Calibre to access online libraries and catalogs.                            | 🔄           |
| **Text-to-Speech (TTS) Support** | Enable text-to-speech functionality for a more accessible reading experience.              | 🔄           |
| **Audiobook Support**            | Extend functionality to play and manage audiobooks.                                        | 🔄           |
| **Handwriting Annotations**      | Add support for handwriting annotations using a pen on compatible devices.                 | 🔄           |
| **Advanced Reading Stats**       | Track reading time, pages read, and more for detailed insights.                            | 🔄           |
| **In-Library Full-Text Search**  | Search across your entire ebook library to find topics and quotes.                         | 🔄           |
| **AI-Powered Summarization**     | Generate summaries of books or chapters using AI for quick insights.                       | 🔄           |

Stay tuned for continuous improvements and updates! Contributions and suggestions are always welcome—let's build the ultimate reading experience together. 😊

## Screenshots

![Annotations](./data/screenshots/annotations.jpeg)

![Wikipedia](./data/screenshots/wikipedia.jpeg)

![DeepL](./data/screenshots/deepl.jpeg)

![Dark Mode](./data/screenshots/dark_mode.jpeg)

---

## Downloads

The Readest app is available for download! 🥳 🚀

- macOS : Search for "Readest" on the [macOS App Store][link-macos-appstore].
- Windows / Linux: Visit [https://readest.com][link-website] or the [Releases on GitHub][link-gh-releases].
- Web: Visit [https://web.readest.com][link-web-readest].
- iOS / Android: coming soon 👀

## Requirements

- **Node.js** and **pnpm** for Next.js development
- **Rust and Cargo** for Tauri development

For the best experience to build Readest for yourself, use a recent version of Node.js and Rust. Refer to the [Tauri documentation](https://v2.tauri.app/start/prerequisites/) for details on setting up the development environment prerequisites on different platforms.

```bash
nvm install v22
nvm use v22
npm install -g pnpm
rustup update
```

## Getting Started

To get started with Readest, follow these steps to clone and build the project.

### 1. Clone the Repository

```bash
git clone https://github.com/chrox/readest.git
cd readest
git submodule update --init --recursive
```

### 2. Install Dependencies

```bash
# might need to rerun this when code is updated
pnpm install
# copy pdfjs-dist to Next.js public directory
pnpm --filter @readest/readest-app setup-pdfjs
```

### 3. Verify Dependencies Installation

To confirm that all dependencies are correctly installed, run the following command:

```bash
pnpm tauri info
```

This command will display information about the installed Tauri dependencies and configuration on your platform. Note that the output may vary depending on the operating system and environment setup. Please review the output specific to your platform for any potential issues.

For Windows targets, “Build Tools for Visual Studio 2022” (or a higher edition of Visual Studio) and the “Desktop development with C++” workflow must be installed. For Windows ARM64 targets, the “VS 2022 C++ ARM64 build tools” and "C++ Clang Compiler for Windows" components must be installed. And make sure `clang` can be found in the path by adding `C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\VC\Tools\Llvm\x64\bin` for example in the environment variable `Path`.

### 4. Build for Development

```bash
pnpm tauri dev
```

### 5. Build for Production

```bash
pnpm tauri build
```

## Contributing

Readest is open-source, and contributions are welcome! Feel free to open issues, suggest features, or submit pull requests. Please review our contributing guidelines before you start.

## Contributors

<!---
npx contributor-faces --exclude "*bot*" --limit 100"
--->

[//]: contributor-faces

<a href="https://github.com/chrox"><img src="https://avatars.githubusercontent.com/u/751535?v=4" title="chrox" width="50" height="50"></a>

[//]: contributor-faces

## License

Readest is distributed under the AGPL-3.0 License. See the [LICENSE](<(LICENSE)>) file for details.

---

<div align="center" style="color: gray;">Happy reading with Readest!</div>

[badge-website]: https://img.shields.io/badge/website-readest.com-orange
[badge-license]: https://img.shields.io/github/license/chrox/readest?color=teal
[badge-release]: https://img.shields.io/github/release/chrox/readest?color=green
[badge-platforms]: https://img.shields.io/badge/OS-macOS%2C%20Windows%2C%20Linux%2C%20Web-green
[badge-last-commit]: https://img.shields.io/github/last-commit/chrox/readest?color=green
[badge-commit-activity]: https://img.shields.io/github/commit-activity/m/chrox/readest
[badge-discord]: https://img.shields.io/discord/1314226120886976544?color=5865F2&label=discord&labelColor=black&logo=discord&logoColor=white&style=flat-square
[link-macos-appstore]: https://apps.apple.com/app/apple-store/id6738622779?pt=127463130&ct=github&mt=8
[link-website]: https://readest.com?utm_source=github&utm_medium=referral&utm_campaign=readme
[link-web-readest]: https://web.readest.com
[link-gh-releases]: https://github.com/chrox/readest/releases
[link-gh-commits]: https://github.com/chrox/readest/commits/main
[link-gh-pulse]: https://github.com/chrox/readest/pulse
[link-discord]: https://discord.gg/jb2nzDts
[link-parallel-read]: https://readest.com/#parallel-read
[link-koreader]: https://github.com/koreader/koreader
