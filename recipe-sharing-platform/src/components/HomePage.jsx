import React, { useState, useEffect } from 'react'

function HomePage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('/data1.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.error("Error fetching JSON:", err))
  }, [])

  return (
    <div>
      <section className='recipe-list flex flex-column gap-5 sm:flex-row p-5'>
        {recipes.map((recipe, index) => (
          <article key={recipe.id || index} className='recipe-card bg-gray-400 rounded-3xl'>
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
