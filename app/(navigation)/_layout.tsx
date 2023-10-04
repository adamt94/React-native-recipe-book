import React from "react";
import { router, Stack } from "expo-router";
import resolveConfig from 'tailwindcss/resolveConfig'
const myConfig = require('../../tailwind.config.js')
import { useColorScheme, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Layout() {
  const { theme } = resolveConfig(myConfig);
  const colorScheme = useColorScheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme === 'light'? 
            theme.backgroundColor.primaryContainer : theme.backgroundColor.primaryContainerDark,
       }, 
        headerTitleStyle: {
          color: colorScheme === 'light'? theme.textColor.onPrimaryContainer : theme.textColor.onPrimaryContainerDark
        },
        headerTintColor: colorScheme === 'light'? theme.textColor.onPrimaryContainer : theme.textColor.onPrimaryContainerDark,
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
