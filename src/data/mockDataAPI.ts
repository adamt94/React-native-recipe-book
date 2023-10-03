import { Category, Ingredient, Recipe } from "@/types/recipe";
import { categories, ingredients, recipes } from "./data";

export function getCategories(): Category[] {
  return categories;
}

export function getIngredientById(
  ingredientId: number,
): Ingredient | undefined {
  const ingredient = ingredients.find((data) =>
    data.ingredientId === ingredientId
  );
  if (ingredient) {
    return ingredient;
  }
  return undefined;
}

export function getRecipeById(recipeId: number): Recipe | undefined {
  const recipe = recipes.find((data) => data.recipeId === recipeId);
  if (recipe) {
    return recipe;
  }
  return undefined;
}

export function getCategoryByID(categoryId: number): Category | undefined {
  let category;
  categories.map((data) => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}

export function getRecipesByIngredientID(ingredientID: number) {
  const recipesArray: Recipe[] = [];
  recipes.map((data) => {
    data.ingredients.map((index) => {
      if (index[0] == ingredientID) {
        recipesArray.push(data as unknown as Recipe);
      }
    });
  });
  return recipesArray;
}

export function getRecipesByCategoryID(categoryID: number) {
  const recipesArray: Recipe[] = [];
  recipes.map((data) => {
    if(data.categoryId === categoryID){
      recipesArray.push(data as unknown as Recipe);
    }
  });
  return recipesArray;
}

export function getCategoryName(categoryId: number) {
  let name = "";
  categories.map((data) => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getRecipes(categoryId: number) {
  const recipesArray: Recipe[] = [];
  recipes.map((data) => {
    if (data.categoryId == categoryId) {
      recipesArray.push(data as unknown as Recipe);
    }
  });
  return recipesArray;
}

// modifica
export function getRecipesByIngredient(ingredientId: number) {
  const recipesArray: Recipe[] = [];
  recipes.map((data) => {
    data.ingredients.map((index) => {
      if (index[0] == ingredientId) {
        recipesArray.push(data as unknown as Recipe);
      }
    });
  });
  return recipesArray;
}

export function getNumberOfRecipes(categoryId: number) {
  let count = 0;
  recipes.map((data) => {
    if (data.categoryId == categoryId) {
      count++;
    }
  });
  return count;
}

export function getAllIngredients(idArray: [number, string][]) {
  const ingredientsArray: Ingredient[] = [];
  idArray.map((index) => {
    ingredients.map((data) => {
      if (data.ingredientId == index[0]) {
        ingredientsArray.push([data, index[1]] as unknown as Ingredient);
      }
    });
  });
  return ingredientsArray;
}

export function getRecipesByRecipeName(recipeName: string) {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray: Recipe[] = [];
  recipes.map((data) => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      recipesArray.push(data as unknown as Recipe);
    }
  });
  return recipesArray;
}
