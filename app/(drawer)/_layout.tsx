import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { TouchableOpacity, useColorScheme, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import resolveConfig from "tailwindcss/resolveConfig";
const myConfig = require("../../tailwind.config.js");

export const unstable_settings = {
  initialRouteName: "home",
};

export default function Layout() {
  const { theme } = resolveConfig(myConfig);
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === "light"
              ? theme.backgroundColor.surfaceContainerHigh
              : theme.backgroundColor.surfaceContainerHighDark,
          },
          drawerActiveTintColor: colorScheme === "light"
            ? theme.backgroundColor.onPrimaryContainer
            : theme.backgroundColor.onPrimaryContainerDark,
          drawerInactiveTintColor: colorScheme === "light"
            ? theme.backgroundColor.onPrimaryContainer
            : theme.backgroundColor.onPrimaryContainerDark,
          drawerStyle: {
            backgroundColor: colorScheme === "light"
              ? theme.backgroundColor.primaryContainer
              : theme.backgroundColor.primaryContainerDark,
          },
          headerTitleStyle: {
            color: colorScheme === "light"
              ? theme.textColor.onSurface
              : theme.textColor.onSurfaceDark,
          },
          headerTintColor: colorScheme === "light"
            ? theme.textColor.onSurface
            : theme.textColor.onSurfaceDark,

          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                router.push({ pathname: "/(navigation)/search" });
              }}
            >
              <View className="rounded-full items-center justify-center">
                <Ionicons
                  name="search-sharp"
                  size={24}
                  color={colorScheme === 'light'? theme.textColor.onSurface : theme.textColor.onSurfaceDark}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      >
      </Drawer>
    </GestureHandlerRootView>
  );
}
