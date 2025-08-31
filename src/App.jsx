import { useState, useEffect } from "react";
import Search from "./components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3/discover";
const API_KEY = import.meta.env.VITE_TMBD_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    const endpoint = `${API_BASE_URL}/movie?sort_by=popularity.desc`;
    try {
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error(`HTTP error!, status: ${response.status}`);
      }

      const data = await response.json();

      if (data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies.");
        setMovies([]);
        return;
      }

      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2>All Movies</h2>
          {isLoading ? (
            <p>Loading</p>
          ) : errorMessage ? (
            <p className="error-message text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movies.map((movie) => (
                <p key={movie.id} className="text-white">
                  {movie.original_title}
                </p>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
