import { StyleSheet, Text, View } from "react-native";
import { FontAwesomeIconName } from "@navigation/components/types";
import { AnimatedTabIcon } from "@navigation/components/AnimatedTabBarIcon";
import colors from "@constants/colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import fontFamily from "@constants/fontFamily";

type CustomTabBarProps = BottomTabBarProps;

type Route = {
    key: string,
    name: string,
    params?: object,
};

export const CustomTabBar = ({
                                 state,
                                 descriptors,
                                 navigation,
                             }: CustomTabBarProps) => {
    return (
        <View style={styles.tabBarContainer}>
            {state.routes.map((route: Route, index: number) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                        ? options.title
                        : route.name;
                const isFocused = state.index === index;

                let iconName: FontAwesomeIconName = "circle";
                if (route.name === "Discover") {
                    iconName = "home";
                } else if (route.name === "Cart") {
                    iconName = "shopping-cart";
                } else if (route.name === "Profile") {
                    iconName = "user";
                }

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, { merge: true });
                    }
                };

                return (
                    <View key={index} style={styles.tabItem}>
                        <AnimatedTabIcon
                            name={iconName}
                            size={24}
                            color={isFocused ? colors.orange : colors.gray500}
                            focused={isFocused}
                            onPress={onPress}
                        />
                        <Text
                            style={[
                                styles.tabLabel,
                                { color: isFocused ? colors.orange : colors.gray500 },
                            ]}
                        >
                            {typeof label === "string" ? label : route.name}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: "row",
        height: 80,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: colors.gray300,
    },
    tabItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
        paddingBottom: 10,
    },
    tabLabel: {
        fontSize: 12,
        marginTop: 4,
        fontFamily: fontFamily.medium,
    },
});
