import React from "react";
import IngredientList from "./ingredientList";
import ClaudeRecipe from "./claudeRecipe";

export default function MainSection() {
  const API_KEY = import.meta.env.VITE_SPOON_KEY;

  const [allIngredients, setAllIngredients] = React.useState([]);
  const [recipes, setRecipes] = React.useState([]);
  const [isShown, setIsShown] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleOnSubmit = (formData) => {
    const newIngredient = formData.get("ingredient");
    if (newIngredient) {
      setAllIngredients((prev) => [...prev, newIngredient]);
    }
  };

  // fetch recipes with ingredients
  const getrecipe = async () => {
    setIsShown(false);
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${allIngredients.join(",")}&number=5&apiKey=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data = await response.json();

      // now fetch details (instructions) for each recipe
      const detailedRecipes = await Promise.all(
        data.map(async (recipe) => {
          const detailsRes = await fetch(
            `https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=false&apiKey=${API_KEY}`
          );
         const details = await detailsRes.json();
         return {
        ...recipe,
        steps:
            details.analyzedInstructions?.[0]?.steps.map(s => s.step) || ["No steps available"]
        };
        })
      );

      console.log("Recipes with details:", detailedRecipes);
      setRecipes(detailedRecipes);
    } 
    catch (error) {
      console.error("Error:", error.message);
    } 
    finally {
      setTimeout(() => {
        setLoading(false);
        setIsShown(true);
      }, 1000);
    }
  };

  return (
    <main className="main-form">
      <form action={handleOnSubmit}>
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>

      {allIngredients.length > 0 && (
        <IngredientList getrecipe={getrecipe} allIngredients={allIngredients} />
      )}

      {loading && (
        <div id="loader-section">
          <div id="loader"></div>
        </div>
      )}

     {isShown && 
     <ClaudeRecipe
        recipes = {recipes}
     />}
    </main>
  );
}
