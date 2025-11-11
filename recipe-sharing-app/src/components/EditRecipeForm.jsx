import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/useRecipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();
  const recipe = recipes.find((r) => r.id === id);

  const [title, setTitle] = useState(recipe?.title || '');
  const [ingredients, setIngredients] = useState(recipe?.ingredients.join(', ') || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({
      id,
      title,
      ingredients: ingredients.split(',').map((i) => i.trim()),
    });
    navigate(`/recipes/${id}`);
  };

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>Ingredients (comma-separated):
        <input value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
