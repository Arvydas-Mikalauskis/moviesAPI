# Movie Search Application

A React-based movie search application that allows users to explore movies using the TMDB API and tracks trending searches using an Appwrite backend.

![App Screenshot](public/hero.png)

## Live Demo
🎬 **[Check out the live demo here](https://moviesearch123412.netlify.app/)**

## Features

- 🔍 Search through thousands of movies from the TMDB database
- 📖 View movie details including ratings, release year, and language
- 📊 Track and display trending movies based on search popularity
- 📱 Responsive design for all devices
- ⚡ Debounced search for better performance

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

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory with the following variables:
   ```bash
   VITE_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## Project Structure

```
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
```

## Build

To build for production, run:
```bash
npm run build
```

## Features in Detail

### 🔍 Search Algorithm
- Implements **debounced search** to prevent excessive API calls
- Updates trending movies based on **search frequency**
- Stores search data in **Appwrite database**

### 📊 Trending Movies
- Tracks user search patterns
- Displays **top 5 most searched movies**
- Updates in real-time using **Appwrite backend**

### 🎬 Movie Display
- Shows **movie posters**
- Displays **movie ratings**
- Includes **release year and language information**
- Handles **missing data gracefully**

## License

This project is open source and available under the **MIT License**.

