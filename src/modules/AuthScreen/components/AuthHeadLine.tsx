import { StyleSheet, View } from "react-native";
import { CONTAINER_WIDTH } from "@constants/index";
import fontFamily from "@constants/fontFamily";
import colors from "@constants/colors";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    withDelay,
    Easing,
} from "react-native-reanimated";
import { useEffect } from "react";

type AuthHeadLineProps = {};

const HEAD_LINE_FIRST = "Performance";
const HEAD_LINE_HIGHLIGHT = "Style";
const HEAD_LINE_LAST = "Confidence";

export const AuthHeadLine = ({}: AuthHeadLineProps) => {
    const translateX = useSharedValue(-100);
    const opacity = useSharedValue(0);
    const highlightOpacity = useSharedValue(0);

    useEffect(() => {
        translateX.value = withDelay(
            400,
            withTiming(0, {
                duration: 600,
                easing: Easing.out(Easing.cubic),
            })
        );

        opacity.value = withTiming(1, { duration: 800 });

        highlightOpacity.value = withDelay(
            400,
            withTiming(1, { duration: 600 })
        );
    }, [highlightOpacity, opacity, translateX]);

    const highlightedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
            opacity: highlightOpacity.value,
        };
    });

    const textStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        };
    });

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Animated.Text style={[styles.text, textStyle]}>
                    {HEAD_LINE_FIRST}
                </Animated.Text>
                <Animated.View style={highlightedStyle}>
                    <Animated.Text style={[styles.text, styles.highlightedText]}>
                        {HEAD_LINE_HIGHLIGHT}
                    </Animated.Text>
                </Animated.View>
                <Animated.Text style={[styles.text, textStyle]}>
                    {HEAD_LINE_LAST}
                </Animated.Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: CONTAINER_WIDTH,
        height: 400,
    },
    textContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    text: {
        fontSize: 40,
        height: 55,
        fontFamily: fontFamily.black,
        color: colors.white,
        textTransform: "uppercase",
    },
    highlightedText: {
        color: colors.orange,
    },
});
