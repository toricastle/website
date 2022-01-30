import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "../../my-app/src/MainPage";
import Generate from "../../my-app/src/Generate";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"MainPage"}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Generate" component={Generate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
