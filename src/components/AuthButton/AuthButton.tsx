import { StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import Animated, {
    FadeIn,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    interpolateColor,
    Easing,
} from "react-native-reanimated";
import { CONTAINER_WIDTH } from "@constants/index";
import fontFamily from "@constants/fontFamily";
import colors from "@constants/colors";
import { useEffect } from "react";

type AuthButtonProps = {
    disabled?: boolean;
    label?: string;
    onPress?: () => void;
    isLoading?: boolean;
}

export const AuthButton = ({
                               disabled = false,
                               label = "",
                               onPress = () => {
                               },
                               isLoading = false,
                           }: AuthButtonProps) => {
    const animationProgress = useSharedValue(disabled ? 0 : 1);

    useEffect(() => {
        animationProgress.value = withTiming(
            disabled ? 0 : 1,
            {
                duration: 300,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }
        );
    }, [animationProgress, disabled]);

    const containerAnimatedStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            animationProgress.value,
            [0, 1],
            [colors.white, colors.orange]
        );

        return {
            backgroundColor,
        };
    });

    const textAnimatedStyle = useAnimatedStyle(() => {
        const textColor = interpolateColor(
            animationProgress.value,
            [0, 1],
            [colors.orange, colors.white]
        );

        return {
            color: textColor,
        };
    });

    return (
        <Animated.View
            entering={FadeIn.delay(300)}
            style={[
                styles.containerShadow,
                styles.container,
                containerAnimatedStyle,
            ]}
        >
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                disabled={disabled || isLoading}
                onPress={onPress}
            >
                {isLoading ? (
                    <ActivityIndicator
                        size="large"
                        color={disabled ? colors.orange : colors.white}
                    />
                ) : (
                    <Animated.Text style={[
                        styles.buttonText,
                        textAnimatedStyle,
                    ]}>
                        {label}
                    </Animated.Text>
                )}
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    containerShadow: {
        shadowColor: colors.orange,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
        borderWidth: 0,
        backgroundColor: colors.white,
    },
    container: {
        width: CONTAINER_WIDTH,
        height: 60,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.orange,
    },
    button: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontFamily: fontFamily.bold,
        fontSize: 24,
        textTransform: "capitalize",
    },
});
