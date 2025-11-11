import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );
  const favorites = useRecipeStore(state => state.favorites);
  const addToFavorites = useRecipeStore(state => state.addToFavorites);
  const removeFromFavorites = useRecipeStore(state => state.removeFromFavorites);

  if (!recipe) return <p>Recipe not found.</p>;

  const isFavorite = favorites.includes(id);

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>
      <button onClick={() => isFavorite ? removeFromFavorites(id) : addToFavorites(id)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeDetails;
