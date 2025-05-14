import {
    NativeStackNavigationOptions,
    NativeStackOptionsArgs,
} from "@react-navigation/native-stack";
import { AppBottomTabsParamList, AppStackParamList, AuthStackParamList } from "@navigation/types";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import colors from "@constants/colors";
import { BottomTabNavigationOptions, BottomTabOptionsArgs } from "@react-navigation/bottom-tabs";
import { AnimatedTabIcon } from "@navigation/components/AnimatedTabBarIcon";
import fontFamily from "@constants/fontFamily";
import { Platform } from "react-native";

export const authScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
};

export const appScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
};

export const appBottomTabsScreenOptions: BottomTabNavigationOptions = {
    headerShown: false,
};

export const discoverTabOptions = ({}: BottomTabOptionsArgs<AppBottomTabsParamList, "Discover">): BottomTabNavigationOptions => {
    return {
        tabBarIcon: (props) => (
            <AnimatedTabIcon name="cc-discover" {...props}/>
        ),
    };
};

export const loginScreenOptions = ({ navigation }: NativeStackOptionsArgs<AuthStackParamList, "Login">): NativeStackNavigationOptions => {
    return {
        headerTitle: "",
        headerShown: true,
        headerTransparent: Platform.OS === "ios",
        headerShadowVisible: false,
        headerLeft: ({ canGoBack }) => (
            canGoBack ? (
                <FontAwesome
                    suppressHighlighting
                    name="arrow-left"
                    size={30}
                    color={colors.orange}
                    onPress={() => navigation.goBack()}
                />
            ) : null
        ),
    };
};

export const registerScreenOptions = ({ navigation }: NativeStackOptionsArgs<AuthStackParamList, "Register">): NativeStackNavigationOptions => {
    return {
        headerTitle: "",
        headerShown: true,
        headerTransparent: Platform.OS === "ios",
        headerShadowVisible: false,
        headerLeft: ({ canGoBack }) => (
            canGoBack ? (
                <FontAwesome
                    suppressHighlighting
                    name="arrow-left"
                    size={30}
                    color={colors.orange}
                    onPress={() => navigation.goBack()}
                />
            ) : null
        ),
    };
};

export const allProductsScreenOptions = ({
                                             navigation,
                                             route,
                                         }: NativeStackOptionsArgs<AppStackParamList, "AllProducts">): NativeStackNavigationOptions => {
    return {
        headerTitle: route.params.title,
        headerTitleStyle: {
            fontSize: 20,
            fontFamily: fontFamily.black,
            color: colors.gray900,
        },
        headerTitleAlign: "center",
        headerShown: true,
        headerTransparent: Platform.OS === "ios",
        headerShadowVisible: false,
        headerLeft: ({ canGoBack }) => (
            canGoBack ? (
                <FontAwesome
                    suppressHighlighting
                    name="arrow-left"
                    size={30}
                    color={colors.orange}
                    onPress={() => navigation.goBack()}
                />
            ) : null
        ),
    };
};

export const detailsScreenOptions = ({ navigation }: NativeStackOptionsArgs<AppStackParamList, "Details">): NativeStackNavigationOptions => {
    return {
        headerTitle: "",
        headerShown: true,
        headerTransparent: Platform.OS === "ios",
        headerShadowVisible: false,
        headerLeft: ({ canGoBack }) => (
            canGoBack ? (
                <FontAwesome
                    suppressHighlighting
                    name="arrow-left"
                    size={30}
                    color={colors.orange}
                    onPress={() => navigation.goBack()}
                />
            ) : null
        ),
    };
};
