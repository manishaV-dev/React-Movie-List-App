import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="favorites">
        <h2>Your Favorites</h2>
      </div>

      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorite and they will appear here!</p>
      </div>
    </>
  );
}

export default Favorite;
