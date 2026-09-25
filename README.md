# .NP Domain Letter Generator

A fast, completely browser-based tool to instantly generate professional domain registration request letters for `.np` domains in Nepal.

## 🌟 Overview

Registering a `.com.np` or personal `.np` domain requires an official cover letter. Formatting this letter properly, signing it, scanning it, and keeping the file size under the strict **200KB limit** can be incredibly frustrating.

This open-source web application completely automates the process. Fill out a simple form, preview your letter in real-time, optionally upload your company stamp and logo, and download a perfectly scaled and compressed JPG image that is guaranteed to be accepted by the Mercantile registry.

## ✨ Features

- **Personal & Company Modes**: Dynamically changes the letter content and formatting based on whether you are an individual or an organization.
- **Browser-Native Image Generation**: Generates high-quality JPGs instantly without relying on external APIs, backend servers, or cloud storage.
- **Auto-Compression**: Intelligently compresses the final output to ensure it stays beneath the registry's strict 200KB limit.
- **Stamp & Logo Integration**: Upload your company stamp and logo. The tool uses `mix-blend-multiply` to make digital stamps look realistic and authentic against the paper background.
- **Privacy First**: 100% of the logic happens locally in your browser. No data, names, emails, or uploaded images are ever sent to a server.
- **Responsive UI**: A modern, mobile-first design built with Tailwind CSS.

## 🚀 Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [html-to-image](https://github.com/bubkoo/html-to-image)
- [React Hook Form](https://react-hook-form.com/)

## 🛠️ Getting Started

To run this project locally, follow these simple steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nispal155/cover-letter-for-.com.np-domain.git
   ```
2. Navigate to the project directory:
   ```bash
   cd cover-letter-for-.com.np-domain
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`.

## 📜 Disclaimer

This is an independent open-source utility designed to help users generate standard request letters. This project is **not affiliated with, endorsed by, or connected to** Mercantile Communications Pvt. Ltd. or the official .NP Domain Registry.

Approval of your domain depends entirely on the official registry reviewers.

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! Feel free to check the [issues page](https://github.com/nispal155/cover-letter-for-.com.np-domain/issues) if you want to contribute.

## 📄 License

This project is licensed under the MIT License.
