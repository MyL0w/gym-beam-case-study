import { StyleSheet, Text } from "react-native";
import fontFamily from "@constants/fontFamily";
import colors from "@constants/colors";

type CartTitleProps = {}

export const CartTitle = ({}: CartTitleProps) => {
    return (
        <Text style={styles.title}>Your cart is empty</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: fontFamily.extraBold,
        fontSize: 30,
        color: colors.gray900,
        textAlign: "center",
        paddingVertical: 20,
    },
});
