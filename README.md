# Ecomm Dashboard Project

A responsive dashboard application built using **Vite**, **React**, and **TailwindCSS v4**, featuring Chart.js-based visualizations and a dynamic routing structure using React Router.

## Getting Started

## Project Setup

1. Create the project using Vite with React and JavaScript:

npm create vite@latest

2. TailwindCSS v4 was used for styling (installation method: "Using Vite").

## TailwindCSS Setup

### Step 1 – Install TailwindCSS and plugin for Vite:

npm install tailwindcss @tailwindcss/vite

### Step 2 – Update vite.config.js:

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});

### Step 3 – In index.css, import Tailwind:

@import "tailwindcss";

### Step 4 – Enable dark theme support using a custom variant in index.css:

@custom-variant dark (&:where(.dark, .dark *));

### Dependencies

- chart.js and react-chartjs-2

npm install chart.js react-chartjs-2

- react Router

npm install react-router-dom

### Run the App

npm run dev

### Decisions and Improvement

- Responsive Design: Optimized manually for mobile and tablet views.

- Navigation: Top and side navigation bars with improved mobile usability.

- Order List: "Order" menu displays dynamic order data.

- Breadcrumbs: Active state updates based on URL pathname and if pathname no there url it set default and render homepage.

### Charts

- Integrated Chart.js with react-chartjs-2.

- Custom donut charts with defined arcs and stylized tooltips using CSS.

### Challenges Faced

- Working with Chart.js and customizing chart components.

- Creating a donut chart with defined arcs and custom tooltips required trial and error.







