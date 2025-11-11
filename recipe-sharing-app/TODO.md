# TODO List for Extending Zustand Store and UI

- [x] Extend Zustand store in `src/components/recipeStore.js`:
  - Add `searchTerm` state (initially empty string).
  - Add `filteredRecipes` state (initially same as `recipes`).
  - Add `setSearchTerm` action to update `searchTerm`.
  - Add `filterRecipes` action to compute `filteredRecipes` based on `searchTerm` (filter by title or ingredients, case insensitive).

- [x] Modify RecipeList component to display filteredRecipes instead of recipes.
- [x] Add a search bar to the UI for updating the search term.
