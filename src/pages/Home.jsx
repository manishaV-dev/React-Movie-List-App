import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "John Wick",
      release_date: 2020,
    },
    {
      id: 2,
      title: "Animal",
      release_date: 2022,
    },
    {
      id: 3,
      title: "Moana",
      release_date: 2015,
    },
  ];

  function handleSearch(e) {
    e.preventDefault();
    alert(searchQuery);
  }

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
          <button type="submit" className="search-btn">
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

        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
