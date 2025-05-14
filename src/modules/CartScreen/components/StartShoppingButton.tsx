import { StyleSheet, Text, TouchableOpacity } from "react-native";
import fontFamily from "@constants/fontFamily";
import colors from "@constants/colors";

type StartShoppingButtonProps = {
    onPress: () => void
}

export const StartShoppingButton = ({ onPress }: StartShoppingButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
            <Text style={styles.buttonText}>Start shopping</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.orange,
        shadowColor: colors.orange,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
        backgroundColor: colors.white,
    },
    buttonText: {
        fontFamily: fontFamily.semiBold,
        fontSize: 15,
        color: colors.orange,
        textTransform: "uppercase",
    },
});
