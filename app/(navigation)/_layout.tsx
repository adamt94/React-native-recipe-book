import React from "react";
import { router, Stack } from "expo-router";
import resolveConfig from 'tailwindcss/resolveConfig'
import myConfig from '../../tailwind.config.js'
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Layout() {
  const { theme } = resolveConfig(myConfig);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.backgroundColor.primaryContainer as string,
       },
        headerTitleStyle: {
          color: theme.textColor.onPrimaryContainer
        },
        headerTintColor: theme.textColor.onPrimaryContainer,
        headerRight: () => (
          <TouchableOpacity onPress={() => {router.push({pathname: "search"})}}>
            <View className="rounded-full items-center justify-center">
              <Ionicons name="search-sharp" size={24} color={theme.textColor.onPrimaryContainer} />
            </View>
          </TouchableOpacity>
        ),
      }}
    />
  );
}
