import React from "react";
import { useNavigate } from "react-router-dom";

const SuggestionDisplay = ({ recipes }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center m-8">
        <p className="text-lg font-semibold text-blue-100">No recipes found. Try different ingredients!</p>
        <div className="w-full mt-8">
          <button
            onClick={goHome}
            className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-900 transition duration-300"
          >
            Go Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-3/4 mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="shadow-md rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-200"
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg text-primary font-semibold">{recipe.strMeal}</h3>
              <a
                href={`https://www.themealdb.com/meal.php?c=${recipe.idMeal}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm mt-2 inline-block"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-8 text-center">
        <button
          onClick={goHome}
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-700 transition duration-300"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuggestionDisplay;
