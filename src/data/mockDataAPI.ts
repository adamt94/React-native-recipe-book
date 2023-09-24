
import { Ingredient, Recipe } from '@/types/recipe';
import { recipes, categories, ingredients } from  './data'


export function getRecipeById(recipeId: number): Recipe | undefined {
  const recipe = recipes.find(data => data.recipeId === recipeId);
  if (recipe) {
    return recipe;
  }
  return undefined;
}

export function getCategoryById(categoryId: number) {
  let category;
  categories.map(data => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}

export function getIngredientName(ingredientID: number) {
  let name;
  ingredients.map(data => {
    if (data.ingredientId == ingredientID) {
      name = data.name;
    }
  });
  return name;
}

export function getIngredientUrl(ingredientID: number) {
  let url;
  ingredients.map(data => {
    if (data.ingredientId == ingredientID) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getCategoryName(categoryId: number) {
  let name = '';
  categories.map(data => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getRecipes(categoryId: number) {
  const recipesArray: Recipe[]  = [];
  recipes.map(data => {
    if (data.categoryId == categoryId) {
      recipesArray.push(data as unknown as Recipe);
    }
  });
  return recipesArray;
}

// modifica
export function getRecipesByIngredient(ingredientId: number) {
  const recipesArray: Recipe[] = [];
  recipes.map(data => {
    data.ingredients.map(index => {
      if (index[0] == ingredientId) {
        recipesArray.push(data as unknown as Recipe);
      }
    });
  });
  return recipesArray;
}

export function getNumberOfRecipes(categoryId: number) {
  let count = 0;
  recipes.map(data => {
    if (data.categoryId == categoryId) {
      count++;
    }
  });
  return count;
}

export function getAllIngredients(idArray: [number, string][]) {
  const ingredientsArray: Ingredient[] = [];
  idArray.map(index => {
    ingredients.map(data => {
      if (data.ingredientId == index[0]) {
        ingredientsArray.push([data, index[1]] as unknown as Ingredient);
      }
    });
  });
  return ingredientsArray;
}

// functions for search
export function getRecipesByIngredientName(ingredientName: string) {
  const nameUpper = ingredientName.toUpperCase();
  const recipesArray: Recipe[] = [];
  ingredients.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() == nameUpper
      const recipes = getRecipesByIngredient(data.ingredientId);
      const unique = [...new Set(recipes)];
      unique.map(item => {
        recipesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(recipesArray)];
  return uniqueArray;
}

export function getRecipesByCategoryName(categoryName: string) {
  const nameUpper = categoryName.toUpperCase();
  const recipesArray: Recipe[] = [];
  categories.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipes = getRecipes(data.id); // return a vector of recipes
      recipes.map(item => {
        recipesArray.push(item);
      });
    }
  });
  return recipesArray;
}

export function getRecipesByRecipeName(recipeName: string) {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray: Recipe[] = [];
  recipes.map(data => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      recipesArray.push(data as unknown as Recipe);
    }
  });
  return recipesArray;
}