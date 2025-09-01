# Movie Search App

A React + Vite application to search for movies using TMDB API, track trending searches, and display movie details. Appwrite is used for storing search metrics.

## Features

- Search for movies from TMDB
- View trending movies based on search count
- Responsive UI with Tailwind CSS
- Appwrite integration for metrics storage

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/amangeldievkuu/TMDB-movies.git
   cd TMDB-movies
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Copy `.env.example` to `.env.local` and fill in your TMDB and Appwrite credentials:

   ```sh
   cp .env.example .env.local
   ```

   Example values:

   ```
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_PROJECT_NAME=your_project_name
   VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   ```

### Running the App

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/` - Source code
  - `components/` - React components
  - `assets/` - Static assets
  - `appwrite.js` - Appwrite integration
  - `App.jsx` - Main app component
- `public/` - Public assets
- `.env.example` - Example environment variables

## Environment Variables

See [`.env.example`](.env.example) for required variables.
