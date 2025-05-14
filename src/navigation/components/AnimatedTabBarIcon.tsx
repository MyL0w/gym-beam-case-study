import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import { Pressable } from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import { FontAwesomeIconName } from "@navigation/components/types";

type AnimatedTabIconProps = {
    name: FontAwesomeIconName,
    color: string,
    size: number,
    focused: boolean,
    onPress?: () => void,
};

export const AnimatedTabIcon = ({
                                    name,
                                    color,
                                    size,
                                    onPress,
                                }: AnimatedTabIconProps) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    const handlePressIn = () => {
        scale.value = withTiming(0.85, { duration: 150 });
    };

    const handlePressOut = () => {
        scale.value = withSpring(1, { damping: 15 });
        if (onPress) {
            onPress();
        }
    };

    return (
        <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
            <Animated.View style={animatedStyle}>
                <FontAwesome name={name} size={size} color={color}/>
            </Animated.View>
        </Pressable>
    );
};
