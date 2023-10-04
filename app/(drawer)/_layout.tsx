import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { TouchableOpacity, View, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import resolveConfig from 'tailwindcss/resolveConfig'
const myConfig = require('../../tailwind.config.js')


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
            backgroundColor: colorScheme === 'light'? theme.backgroundColor.primaryContainer : theme.backgroundColor.primaryContainerDark,
       },
          drawerActiveTintColor: colorScheme === 'light'? theme.backgroundColor.primary : theme.backgroundColor.primaryDark,
          drawerInactiveTintColor: colorScheme === 'light'? theme.backgroundColor.onPrimaryContainer : theme.backgroundColor.onPrimaryContainerDark,
          drawerStyle: {
            backgroundColor: colorScheme === 'light'? theme.backgroundColor.primaryContainer : theme.backgroundColor.primaryContainerDark,
          },
        headerTitleStyle: {
            color: colorScheme === 'light'? theme.textColor.onPrimaryContainer : theme.textColor.onPrimaryContainerDark
        },
          headerTintColor: colorScheme === 'light'? theme.textColor.onPrimaryContainer : theme.textColor.onPrimaryContainerDark,

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
                <Ionicons name="search-sharp" size={24} color="black" />
              </View>
            </TouchableOpacity>
          ),
        }}
      >
      </Drawer>
    </GestureHandlerRootView>
  );
}
