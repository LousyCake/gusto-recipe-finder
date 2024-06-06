import React from 'react';
import './RecipeList.css';

const RecipeList = () => {
  const recipes = [
    { name: 'Recipe 1', image: 'path_to_image', description: 'Description 1' },
    { name: 'Recipe 2', image: 'path_to_image', description: 'Description 2' },
    // Add more recipes here
  ];

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <div className="recipe-cards">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.image} alt={recipe.name} />
            <div className="recipe-info">
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
