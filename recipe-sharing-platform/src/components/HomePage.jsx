import React, { useState, useEffect } from 'react'

function HomePage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.error("Error fetching JSON:", err))
  }, [])

  return (
    <div>
      <section className='recipe-list grid grid-cols-1 md:grid-cols-3 p-5'>
        {recipes.map((recipe, index) => (
          <article key={recipe.id || index} className='recipe-card bg-gray-400 rounded-3xl text-amber-100 hover:shadow-purple-50 sm:size-6'>
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <h3>{recipe.summary}</h3>
          </article>
        ))}
      </section>
    </div>
  )
}

export default HomePage
