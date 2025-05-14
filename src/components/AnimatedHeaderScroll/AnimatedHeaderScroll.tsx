import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";
import { StyleSheet, Platform, StatusBar } from "react-native";
import React from "react";
import colors from "@constants/colors";
import fontFamily from "@constants/fontFamily";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type AnimatedHeaderScrollProps = {
    children: React.ReactNode,
}

const MAX_HEADER_HEIGHT = 80;
const MIN_HEADER_HEIGHT = 40;
const SCROLL_THRESHOLD = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

export const AnimatedHeaderScroll = ({ children }: AnimatedHeaderScrollProps) => {
    const insets = useSafeAreaInsets();
    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
    });

    const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;
    const platformHeaderAdjustment = Platform.OS === "android" ? statusBarHeight : 0;

    const headerAnimatedStyle = useAnimatedStyle(() => {
        const headerHeight = interpolate(
            scrollY.value,
            [0, SCROLL_THRESHOLD],
            [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
            Extrapolation.CLAMP
        );

        return {
            height: headerHeight + platformHeaderAdjustment,
            paddingTop: platformHeaderAdjustment,
        };
    });

    const headerTextAnimatedStyle = useAnimatedStyle(() => {
        return {
            fontSize: interpolate(
                scrollY.value,
                [0, SCROLL_THRESHOLD],
                [24, 18],
                Extrapolation.CLAMP
            ),
            transform: [
                {
                    translateY: interpolate(
                        scrollY.value,
                        [0, SCROLL_THRESHOLD],
                        [0, -10],
                        Extrapolation.CLAMP
                    ),
                },
            ],
        };
    });

    return (
        <Animated.View style={styles.safeArea}>
            <Animated.View style={styles.container}>
                <Animated.View style={[styles.header, headerAnimatedStyle]}>
                    <Animated.Text style={[styles.headerText, headerTextAnimatedStyle]}>
                        Discover
                    </Animated.Text>
                </Animated.View>
                <Animated.ScrollView
                    nestedScrollEnabled
                    contentContainerStyle={[
                        styles.contentContainer,
                        {
                            paddingTop: MAX_HEADER_HEIGHT + platformHeaderAdjustment,
                            paddingBottom: insets.bottom,
                        },
                    ]}
                    showsVerticalScrollIndicator={false}
                    onScroll={scrollHandler}
                    scrollEventThrottle={16}
                >
                    {children}
                </Animated.ScrollView>
            </Animated.View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
        alignItems: "center",
    },
    contentContainer: {
        alignItems: "center",
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: colors.white,
        justifyContent: "flex-end",
        paddingBottom: 15,
        paddingHorizontal: 20,
    },
    headerText: {
        fontFamily: fontFamily.bold,
        color: colors.gray900,
    },
});
