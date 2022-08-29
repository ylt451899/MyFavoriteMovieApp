import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { MovieStack } from "./StackTabs";
import FavoriteMovieScreen from "./FavoriteMovieScreen";
import * as Icon from 'react-native-feather';

const Tab = createBottomTabNavigator()

export const BottomTab = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({route})=>({
                    tabBarIcon:()=>{
                        if(route.name == "電影"){
                            return <Icon.Film width={25} height={25} />
                        }else{
                            return <Icon.Star width={25} height={25} />
                        }
                    },
                    headerBackTitle:'返回',
                    headerShown:false,   
                })}
            >
                <Tab.Screen name="電影" component={MovieStack}/>
                <Tab.Screen name="我的最愛" component={FavoriteMovieScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}   