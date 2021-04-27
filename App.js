import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./src/components";
const { Home, Media } = Index;

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#FF0000',
            },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen
          name="Media"
          component={Media}
          options={{
            title: "Média de Consumo",
            headerTitleAlign: "left",
            headerStyle: {
              backgroundColor: '#FF0000',
            },
            headerTintColor: '#FFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
