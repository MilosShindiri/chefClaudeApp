import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    //ingredients.push(newIngredient);
    setIngredients((preIngredient) =>
      !preIngredient.includes(newIngredient)
        ? [...preIngredient, newIngredient]
        : preIngredient
    );
  }
  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul className="listOfIngredients">{ingredientsListItems}</ul>
    </main>
  );
}
