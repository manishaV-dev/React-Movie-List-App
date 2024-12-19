import "../css/Favorites.css";

function Favorite() {
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
