import './App.css'
import HomePage from './components/HomePage'
import {
  Routes, Route
} from "react-router-dom";
import RecipeDetail from './components/RecipeDetail';
function App() {

  return (
    <>
      <div>
      <HomePage/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      </div>
    </>
  )
}

export default App
