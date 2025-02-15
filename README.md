Movie Search Application

A React-based movie search application that allows users to explore movies using the TMDB API and tracks trending searches using an Appwrite backend.



Features

🔍 Search through thousands of movies from the TMDB database

📖 View movie details including ratings, release year, and language

📊 Track and display trending movies based on search popularity

📱 Responsive design for all devices

⚡ Debounced search for better performance

Tech Stack

React - Frontend framework

Appwrite - Backend as a Service

Tailwind CSS - Styling

TMDB API - Movie database

Vite - Build tool

Getting Started

Prerequisites

Node.js

NPM or Yarn

Appwrite account

TMDB API key

Installation

Clone the repository:

git clone https://github.com/your-username/movie-search-app.git
cd movie-search-app

Install dependencies:

npm install

Create a .env file in the root directory with the following variables:

VITE_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id

Start the development server:

npm run dev

Project Structure

📦 movie-search-app
├── 📂 src
│   ├── 📂 components
│   │   ├── 📄 MovieCard.jsx  # Movie display component
│   │   ├── 📄 Search.jsx     # Search input component
│   │   ├── 📄 Spinner.jsx    # Loading indicator
│   ├── 📄 appwrite.js       # Appwrite configuration and functions
│   ├── 📄 App.jsx           # Main application component
│   ├── 📄 index.css         # Global styles and Tailwind configuration
├── 📄 .env.example          # Example environment variables
├── 📄 package.json          # Project dependencies and scripts

Build

To build for production, run:

npm run build

Features in Detail

🔍 Search Algorithm

Implements debounced search to prevent excessive API calls

Updates trending movies based on search frequency

Stores search data in Appwrite database

📊 Trending Movies

Tracks user search patterns

Displays top 5 most searched movies

Updates in real-time using Appwrite backend

🎬 Movie Display

Shows movie posters

Displays movie ratings

Includes release year and language information

Handles missing data gracefully

License

This project is open source and available under the MIT License.
