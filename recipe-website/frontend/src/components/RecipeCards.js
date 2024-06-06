import React from 'react';
import './RecipeCards.css';

const RecipeCards = () => {
  const recipes = [
    { name: 'Gourmet Cheeseburger', image: 'Images/gourmet_cheeseburger.png', description: 'Gourmet cheeseburger with lettuce, tomato, and melted cheese.' },
    { name: 'Fresh Fruit Salad', image: 'Images/fresh_fruit_salad.png', description: 'Colorful bowl of fresh mixed fruit salad including strawberries, blueberries, and kiwi.' },
    { name: 'Sushi Assortment', image: 'Images/sushi_assortment.png', description: 'Beautifully plated sushi assortment with slices of salmon, tuna, and avocado.' },
    { name: 'Margherita Pizza', image: 'Images/margherita_pizza.png', description: 'Classic Italian Margherita pizza with fresh basil leaves and mozzarella cheese.' },
  ];

  return (
    <div className="recipe-cards">
      <h2>Recipes</h2>
      <div className="cards-container">
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

export default RecipeCards;
