import React, { useState } from "react";

export default function ClaudeRecipe({ recipes }) {
    
 //because props are read-only thats why state with its own liked property
  const [recipeList, setRecipeList] = useState(
    recipes.map(r => ({ ...r, liked: false })) // add liked flag per recipe
  );

  const likeUnlike = (id) => {
    setRecipeList(prev =>
      prev.map(r =>
        r.id === id
          ? {
              ...r,
              liked: !r.liked, // toggle liked per recipe
              likes: r.liked ? r.likes - 1 : r.likes + 1
            }
          : r
      )
    );
  };

  return (
    <section id="recipes">
      {recipeList.map(recipe => (
        <div key={recipe.id} id="recipe-section">
          <h3 id="recipe-title">{recipe.title}</h3>
          <div id="ingredients">
            <img src={recipe.image} alt={recipe.title} />
            <div>
            {recipe.usedIngredients?.length > 0 && (
              <div>
                <h3>Used Ingredients:</h3>
                <ul>
                  {recipe.usedIngredients.map(ing => (
                    <li key={ing.id}>{ing.original}</li>
                  ))}
                </ul>
              </div>
            )}

            {recipe.missedIngredients?.length > 0 && (
              <div>
                <h3>Missed Ingredients:</h3>
                <ul>
                  {recipe.missedIngredients.map(ing => (
                    <li key={ing.id}>{ing.original}</li>
                  ))}
                </ul>
              </div>
            )}
            </div>
          </div>

          <div id="instructions">
            <h3>Instructions</h3>
            <p>{recipe.steps}</p>
          </div>

          <div id="likes">
            <button onClick={() => likeUnlike(recipe.id)}>
                {recipe.liked
                ? <i className="fa-solid fa-heart text-red-500"></i>
                : <i className="fa-regular fa-heart"></i>}
            </button>
            <p>{recipe.likes}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
