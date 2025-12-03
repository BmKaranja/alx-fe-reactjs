import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.recipes.find((r) => r.id.toString() === id);
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading recipe...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />

      {/* Ingredients */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ing, idx) => (
            <li key={idx} className="text-gray-700">{ing}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, idx) => (
            <li key={idx} className="text-gray-700">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
