import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export const unstable_settings = {
  initialRouteName: "home",
};

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
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
