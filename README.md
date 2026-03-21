# Image Background Remover

## Description

A modern, full-featured web application for removing image backgrounds with an intuitive user interface. Built with Next.js and powered by the Remover.bg API, this application provides a seamless experience for batch processing and downloading high-quality results.

## Features

- **Fast Background Removal** - AI-powered background removal using the Remover.bg API
- **Batch Processing** - Upload and process multiple images efficiently
- **Real-time Preview** - View results instantly with smooth animations
- **Download Management** - Easy download of processed images with unique identification
- **Responsive Design** - Optimized for desktop and mobile devices
- **Modern Animations** - Smooth, polished UI interactions

## Tech Stack

- **Next.js** - React framework for production
- **TypeScript** - Static type checking for safer code
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Axios** - HTTP client
- **UUID** - Unique identifier generation
- **Remover.bg API** - Background removal service

## Prerequisites

- Node.js 16+ and npm/yarn
- Remover.bg API key ([Get one here](https://www.remove.bg/api))

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/DipeshPun91/bg_remover.git
   cd bg_remover
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:

   ```
   NEXT_PUBLIC_REMOVER_BG_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Upload an image from your device
2. The background will be removed automatically
3. Preview the result with smooth animations
4. Download the processed image with a unique identifier for easy tracking

## Project Structure

```
src/
├── app/
│   ├── api/              # API routes
│   ├── remover-bg/       # Main application page
│   └── layout.tsx        # App layout
├── components/           # Reusable React components
└── globals.css          # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
