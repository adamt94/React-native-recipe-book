import React from "react";
import { router, Stack } from "expo-router";
import { Button, View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity onPress={() => {router.push({pathname: "search"})}}>
            <View className="bg-blue-500 rounded-full p-4 items-center justify-center">
              <Ionicons name="search-sharp" size={24} color="black" />
            </View>
          </TouchableOpacity>
        ),
      }}
    />
  );
}
