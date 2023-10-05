import React from "react";

import { Stack } from "expo-router";
import { getCategories } from "@/data/mockDataAPI";
import CategoriesScreen from "@/screens/Categories";

export default function Category() {
  const categories = getCategories();

  return (
    <>
      <Stack.Screen
        options={{
          title: "Categories",
        }}
      />
      <CategoriesScreen categories={categories} />
    </>
  );
}
