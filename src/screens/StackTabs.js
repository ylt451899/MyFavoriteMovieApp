import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MovieScreen from "./MovieScreen";
import MovieDetail from "./MovieDetail";

const Stack = createStackNavigator();

export const MovieStack = () => {
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerBackTitle:'返回',
                tabBarStyle:{display:'none'},
                headerShown:false,   
            }}
        >
            <Stack.Screen name="電影" component={MovieScreen}/>
            <Stack.Screen name="簡介" component={MovieDetail}/>
        </Stack.Navigator>
    )
}   




