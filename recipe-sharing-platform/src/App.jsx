import './App.css'
import HomePage from './components/HomePage'
import {
  Routes, Route, BrowserRouter as Router
} from "react-router-dom";
import RecipeDetail from './components/RecipeDetail';
function App() {

  return (
    <>
      <div>
      <HomePage/>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
      </Router>
      </div>
    </>
  )
}

export default App
