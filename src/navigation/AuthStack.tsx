import React from "react";
import { AuthStackParamList } from "@navigation/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen, LoginScreen, RegisterScreen } from "@screens/index";
import { authScreenOptions, loginScreenOptions, registerScreenOptions } from "@navigation/options";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen name="Auth" options={authScreenOptions} component={AuthScreen}/>
            <Stack.Screen name="Login" options={loginScreenOptions} component={LoginScreen}/>
            <Stack.Screen name="Register" options={registerScreenOptions} component={RegisterScreen}/>
        </Stack.Navigator>
    );
};
