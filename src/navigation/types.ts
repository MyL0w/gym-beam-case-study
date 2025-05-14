import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Product } from "@api/types";

export type AuthStackParamList = {
    Auth: undefined;
    Login: undefined;
    Register: undefined;
};

export type AppStackParamList = {
    Home: undefined;
    AllProducts: { products: Product[], isOnSale?: boolean, title: string };
    Details: { product: Product, isOnSale?: boolean };
};

export type AppBottomTabsParamList = {
    Discover: undefined,
    Cart: undefined,
    Profile: undefined,
}

export type AuthNavigationProp<T extends keyof AuthStackParamList> =
    NativeStackNavigationProp<AuthStackParamList, T>;

export type AppNavigationProp<T extends keyof AppStackParamList> =
    NativeStackNavigationProp<AppStackParamList, T>;

export type AppBottomTabsNavigationProp<T extends keyof AppBottomTabsParamList> =
    BottomTabNavigationProp<AppBottomTabsParamList, T>;

export type AuthRouteProp<T extends keyof AuthStackParamList> =
    RouteProp<AuthStackParamList, T>;

export type AppRouteProp<T extends keyof AppStackParamList> =
    RouteProp<AppStackParamList, T>;
