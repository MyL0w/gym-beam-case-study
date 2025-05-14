import { StyleSheet, Text } from "react-native";
import fontFamily from "@constants/fontFamily";
import colors from "@constants/colors";

type CartMessageProps = {}

export const CartMessage = ({}: CartMessageProps) => {
    return (
        <Text style={styles.message}>Looks like you haven't added any items to your cart yet. Discover our products
            and find
            something you'll love!</Text>
    );
};

const styles = StyleSheet.create({
    message: {
        fontFamily: fontFamily.medium,
        fontSize: 15,
        color: colors.gray800,
        textAlign: "center",
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
});
