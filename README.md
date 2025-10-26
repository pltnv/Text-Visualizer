# Text-Visualizer 🤖

[![Powered by: Google Gemini](https://img.shields.io/badge/Powered%20by-Google%20Gemini-4285F4?logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)
[![Chart.js](https://img.shields.io/badge/Visualized%20with-Chart.js-FF6384?logo=chart.js&logoColor=white)](https://www.chartjs.org/)

A text analysis application powered by Google Gemini AI with automatic visualization.

## What it does

Analyzes text and generates structured summaries:
- Key ideas and thesis
- Terms and entities
- Sentiment analysis (positive/negative/neutral/mixed)
- Problems and solutions (if present)
- **Charts based on numerical data (bar, line, pie, doughnut, radar, polarArea)**

## Tech stack

- **Vue 3** + TypeScript + Vite
- **Google Gemini AI** — `gemini-2.0-flash-001` model for text analysis
- **Chart.js** — data visualization
- **PrimeVue** — UI components

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the project root and add your API key:

```
VITE_GEMINI_API_KEY=your_api_key_here
```

Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey).

## Running

```bash
npm run dev
```

Build for production:

```bash
npm run build
```
