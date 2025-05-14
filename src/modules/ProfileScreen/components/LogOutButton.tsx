import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { CONTAINER_WIDTH } from "@constants/index";
import colors from "@constants/colors";
import fontFamily from "@constants/fontFamily";
import Animated, { FadeIn } from "react-native-reanimated";

type LogOutButtonProps = {
    onPress: () => void
}

export const LogOutButton = ({ onPress }: LogOutButtonProps) => {
    return (
        <Animated.View entering={FadeIn.duration(600)}>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: CONTAINER_WIDTH,
        height: 60,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: colors.orange,
        marginBottom: 10,
        shadowColor: colors.orange,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4.65,
        elevation: 3,
        backgroundColor: colors.white,
    },
    buttonText: {
        fontSize: 20,
        fontFamily: fontFamily.semiBold,
        color: colors.orange,
        textTransform: "uppercase",
        paddingHorizontal: 20,
    },
});
