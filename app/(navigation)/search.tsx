import React from "react";

import { Stack, useLocalSearchParams } from "expo-router";
import SearchScreen from "@/screens/Search";

export default function Search() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Search",
        }}
      />
      <SearchScreen />
    </>
  );
}
