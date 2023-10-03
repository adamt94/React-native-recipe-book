import React from "react";
import { Slot, Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <View className="bg-primary"><Slot /></View>
    </Stack>
  );
}
