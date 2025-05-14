import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withSequence,
    withTiming,
    Easing,
} from "react-native-reanimated";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "@constants/colors";
import fontFamily from "@constants/fontFamily";

type CategoryAnimatedButtonProps = {
    category: string;
    isSelected: boolean;
    onPress: () => void;
    isVisible: boolean;
}

export const CategoryAnimatedButton = ({ category, isSelected, onPress, isVisible }: CategoryAnimatedButtonProps) => {
    const scale = useSharedValue(0);
    const opacity = useSharedValue(0);
    const rotation = useSharedValue(0);

    useEffect(() => {
        if (isVisible) {
            scale.value = withSpring(1, {
                damping: 10,
                stiffness: 100,
                mass: 0.5,
            });
            opacity.value = withSpring(1, { damping: 20 });
        }
    }, [isVisible, opacity, scale]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: scale.value },
                { rotate: `${rotation.value}deg` },
            ],
            opacity: opacity.value,
        };
    });

    const handlePress = () => {
        onPress();
        rotation.value = withSequence(
            withTiming(-5, { duration: 50, easing: Easing.inOut(Easing.ease) }),
            withTiming(5, { duration: 50, easing: Easing.inOut(Easing.ease) }),
            withTiming(-5, { duration: 50, easing: Easing.inOut(Easing.ease) }),
            withTiming(5, { duration: 50, easing: Easing.inOut(Easing.ease) }),
            withTiming(0, { duration: 50, easing: Easing.inOut(Easing.ease) },)
        );
    };

    return (
        <Animated.View style={animatedStyle}>
            <TouchableOpacity
                style={[
                    styles.categoryButton,
                    isSelected && styles.selectedCategoryButton,
                ]}
                onPress={handlePress}
                activeOpacity={0.8}
            >
                <Text
                    style={[
                        styles.categoryText,
                        isSelected && styles.selectedCategoryText,
                    ]}
                >
                    {category}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    categoryButton: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: colors.gray300,
        margin: 5,
        minWidth: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    selectedCategoryButton: {
        backgroundColor: colors.orange,
    },
    categoryText: {
        fontSize: 14,
        fontFamily: fontFamily.semiBold,
        color: colors.gray700,
        textTransform: "capitalize",
    },
    selectedCategoryText: {
        color: colors.white,
    },
});
