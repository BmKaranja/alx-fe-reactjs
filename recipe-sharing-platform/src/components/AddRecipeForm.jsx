import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }
    if (ingredients.split(",").length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    setError("");
    const newRecipe = { title, ingredients: ingredients.split(","), steps };
    console.log("Submitted Recipe:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      {error && <p className="text-red-500">{error}</p>}

      <div>
        <label className="block text-gray-700 font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Ingredients (comma separated)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
          rows="3"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
          rows="4"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
