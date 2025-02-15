# Movie Search Application

A React-based movie search application that allows users to explore movies using TMDB API and tracks trending searches using Appwrite backend.

![App Screenshot](public/hero.png)

## Features

- Search through thousands of movies from TMDB database
- View movie details including ratings, release year, and language
- Track and display trending movies based on search popularity
- Responsive design for all devices
- Debounced search for better performance

## Tech Stack

- [React](https://reactjs.org/) - Frontend framework
- [Appwrite](https://appwrite.io/) - Backend as a Service
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TMDB API](https://developer.themoviedb.org/) - Movie database
- [Vite](https://vitejs.dev/) - Build tool

## Getting Started

### Prerequisites

- Node.js
- NPM or Yarn
- Appwrite account
- TMDB API key

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

Create a .env file in the root directory with the following variables:

VITE_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id

Start the development server:
npm run dev

Project Structure
components - React components
MovieCard.jsx - Movie display component
Search.jsx - Search input component
Spinner.jsx - Loading indicator
appwrite.js - Appwrite configuration and functions
App.jsx - Main application component
index.css - Global styles and Tailwind configuration
Build

To build for production:
npm run build

Features in Detail
Search Algorithm
Implements debounced search to prevent excessive API calls
Updates trending movies based on search frequency
Stores search data in Appwrite database
Trending Movies
Tracks user search patterns
Displays top 5 most searched movies
Updates in real-time using Appwrite backend
Movie Display
Shows movie posters
Displays movie ratings
Includes release year and language information
Handles missing data gracefully
License
This project is open source and available under the MIT License. ```
