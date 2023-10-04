import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import resolveConfig from 'tailwindcss/resolveConfig'
const myConfig = require('../../tailwind.config.js')


export const unstable_settings = {
  initialRouteName: "home",
};

export default function Layout() {
const { theme } = resolveConfig(myConfig);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer

        screenOptions={{
           headerStyle: {
          backgroundColor: theme.backgroundColor.primaryContainer,
       },
        drawerActiveTintColor: theme.backgroundColor.primary,
          drawerStyle: {
          backgroundColor: theme.backgroundColor.primaryContainer,
          },
        headerTitleStyle: {
          color: theme.textColor.onPrimaryContainer
        },
        headerTintColor: theme.textColor.onPrimaryContainer,

          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                router.push({ pathname: "/(navigation)/search" });
              }}
            >
              <View className="bg-blue-500 rounded-full items-center justify-center">
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
