import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

import Home from "./Screens/Home";
import Profile from "./Screens/Profile";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// npx expo install react-native-screens react-native-safe-area-context

// npm install @react-navigation/native-stack
