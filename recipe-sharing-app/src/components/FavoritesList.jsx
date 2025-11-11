import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));
  const removeFromFavorites = useRecipeStore(state => state.removeFromFavorites);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet. Add some recipes to your favorites!</p>
      ) : (
        favorites.map(recipe => (
          <div key={recipe.id}>
            <h3><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h3>
            <p>{recipe.description}</p>
            <button onClick={() => removeFromFavorites(recipe.id)}>Remove from Favorites</button>
          </div>
        ))
      )}
    </div>
  );
};
export default FavoritesList;
