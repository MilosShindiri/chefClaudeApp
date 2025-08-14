import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    //ingredients.push(newIngredient);
    setIngredients((preIngredient) =>
      !preIngredient.includes(newIngredient)
        ? [...preIngredient, newIngredient]
        : preIngredient
    );
  }

  function toggleRecipeShown() {
    setRecipeShown(true);
  }

  return (
    <main>
      <form className="add-ingredient-form" action={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {/* <ul className="listOfIngredients">{ingredientsListItems}</ul> */}
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
