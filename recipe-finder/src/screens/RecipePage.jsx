import React, { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import SuggestionDisplay from "../components/SuggestionDisplay";
import GenieSuggestions from "../components/GenieSuggestions";
import oopsGenieImg from "../assets/images/oopsGenie.jpg";

const Recipe = () => {
  
  const navigate = useNavigate(); 
  const { state } = useLocation();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { ingredients } = state || {};

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!ingredients) return;

      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipes.");
        }

        const data = await response.json();
        if (data.meals) {
          setRecipes(data.meals);
        } else {
          setRecipes([]);
        }
      } catch (err) {
        setError(err.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [ingredients]);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  if (!recipes || recipes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-primary">
          <img src={oopsGenieImg} alt="Oops Genie" className="w-full h-full object-cover" />
        </div>
        <p className="mt-4 text-lg font-semibold text-blue-100 text-center">
          Oops! No recipes found. Try different ingredients.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-700 transition duration-300"
        >
          Go Back to Home
        </button>
      </div>
    );
  }
  

  return (
    <div>
      {recipes.length > 0 && <GenieSuggestions ingredients={ingredients} />}
      <SuggestionDisplay recipes={recipes} />
    </div>
  );
};

export default Recipe;
