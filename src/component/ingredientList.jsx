export default function IngredientList(props){

    const ingredientsList = props.allIngredients.map((ingredient) => (
        <li key={ingredient}>
            {ingredient}
        </li>
    ))

    return(
       <section>
                <h1>Ingredients on hand:</h1>
                <ul>
                     {ingredientsList}
                </ul>
                {props.allIngredients.length > 3 && <div id="generate-recipe">
                 <div>
                    <h1>Ready for a recipe?</h1>
                    <p>Generate a recipe from your list of ingredients</p>
                 </div>
                 <button onClick={props.getrecipe} id="generate-btn">Get a recipe</button>
                </div>}
        </section>
    )
}