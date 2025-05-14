import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import fontFamily from "@constants/fontFamily";
import colors from "@constants/colors";
import { CONTAINER_WIDTH } from "@constants/index";

type RegistrationButtonProps = {
    onPress: () => void
}

export const RegistrationButton = ({ onPress }: RegistrationButtonProps) => {
    return (
        <TouchableOpacity style={styles.registrationButton} activeOpacity={0.8} onPress={onPress}>
            <Animated.Text entering={FadeIn.delay(300)} style={styles.registrationText}>Don't have an
                account?</Animated.Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    registrationText: {
        fontSize: 20,
        fontFamily: fontFamily.bold,
        color: colors.orangeLight,
    },
    registrationButton: {
        width: CONTAINER_WIDTH,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },
});
