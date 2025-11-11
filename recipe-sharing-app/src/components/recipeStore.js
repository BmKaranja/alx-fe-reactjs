import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(state.searchTerm.toLowerCase()))
      ),
    })),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(state.searchTerm.toLowerCase()))
        ),
      };
    }),

  // Update a recipe by ID
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(state.searchTerm.toLowerCase()))
        ),
      };
    }),

  // Set search term and filter recipes
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase()) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(term.toLowerCase()))
      ),
    })),

  // Add recipe to favorites
  addToFavorites: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Remove recipe from favorites
  removeFromFavorites: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter(id => id !== recipeId),
    })),

  // Generate recommendations based on favorites (simple example: recipes with similar ingredients)
  generateRecommendations: () =>
    set((state) => {
      const favoriteRecipes = state.recipes.filter(recipe => state.favorites.includes(recipe.id));
      const recommended = state.recipes.filter(recipe => {
        if (state.favorites.includes(recipe.id)) return false; // Exclude already favorited
        const recipeIngredients = recipe.ingredients.map(ing => ing.toLowerCase());
        return favoriteRecipes.some(fav =>
          fav.ingredients.some(ing => recipeIngredients.includes(ing.toLowerCase()))
        );
      });
      return { recommendations: recommended };
    }),

  // Set recommendations (for manual setting if needed)
  setRecommendations: (recs) =>
    set(() => ({
      recommendations: recs,
    })),
}));
export default useRecipeStore;