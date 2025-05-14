import React from "react";
import { AppStackParamList } from "@navigation/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, DetailsScreen, AllProductsScreen } from "@screens/index";
import { allProductsScreenOptions, appScreenOptions, detailsScreenOptions } from "@navigation/options";

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={appScreenOptions}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="AllProducts" component={AllProductsScreen} options={allProductsScreenOptions}/>
            <Stack.Screen name="Details" component={DetailsScreen} options={detailsScreenOptions}/>
        </Stack.Navigator>
    );
};
