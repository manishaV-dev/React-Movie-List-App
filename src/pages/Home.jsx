import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const movies = [
  //   {
  //     id: 1,
  //     title: "John Wick",
  //     release_date: 2020,
  //   },
  //   {
  //     id: 2,
  //     title: "Animal",
  //     release_date: 2022,
  //   },
  //   {
  //     id: 3,
  //     title: "Moana",
  //     release_date: 2015,
  //   },
  // ];

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    // alert(searchQuery);

    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);

    try {
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search...");
    } finally {
      setLoading(false);
    }

    // setSearchQuery("");
  };

  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="search for movie..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        {/* <div className="movies-grid">
          {movies.map(
            (movie) =>
                // define search function-- first change movie to lowercase as it is string, then use startsWith method and give searchQuery, now when we type in search box if there movie available it shows that
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              )

              do not use this search because we are using API for this
          )}
        </div> */}

        {error && <div className="error-message"> {error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
