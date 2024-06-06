import React from 'react';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const recipe = {
    name: 'Recipe Name',
    image: 'path_to_image',
    description: 'Recipe description...',
    calories: 300,
    protein: 20,
    preparation_time: 30,
    utensils: ['utensil 1', 'utensil 2'],
  };

  return (
    <div className="recipe-detail">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.description}</p>
      <p>Calories: {recipe.calories}</p>
      <p>Protein: {recipe.protein}g</p>
      <p>Preparation Time: {recipe.preparation_time} minutes</p>
      <p>Utensils: {recipe.utensils.join(', ')}</p>
    </div>
  );
};

export default RecipeDetail;
