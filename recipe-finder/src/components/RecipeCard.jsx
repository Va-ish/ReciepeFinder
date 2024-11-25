import React from 'react';

const RecipeCard = ({ meal }) => {
  return (
    <div className="shadow-md rounded-lg overflow-hidden m-40">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
      <div className="p-14">
        <h3 className="font-semibold text-xl">{meal.strMeal}</h3>
        <p className="text-primary">{meal.strCategory}</p>
        <a href={`https://www.themealdb.com/meal/${meal.idMeal}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
