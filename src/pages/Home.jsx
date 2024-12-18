import MovieCard from "../components/MovieCard";

function Home() {
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


  function handleSearch(e){
    e.preventDefault()
  }

  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="search for movie..."
            className="search-input"
          />
        </form>

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
