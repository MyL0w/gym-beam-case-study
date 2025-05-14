import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "@constants/colors";
import fontFamily from "@constants/fontFamily";
import FontAwesome from "@react-native-vector-icons/fontawesome";

type AddToCartButtonProps = {
    handleAddToCart: () => void,
}

export const AddToCartButton = ({ handleAddToCart }: AddToCartButtonProps) => {
    return (
        <View
            style={styles.stickyButtonContainer}
        >
            <TouchableOpacity
                style={styles.addToCartButton}
                onPress={handleAddToCart}
                activeOpacity={0.8}
            >
                <FontAwesome name="shopping-cart" size={18} color={colors.white} style={styles.cartIcon}/>
                <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    stickyButtonContainer: {
        paddingVertical: 16,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.white,
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderTopColor: colors.gray200,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 8,
    },
    addToCartButton: {
        backgroundColor: colors.orange,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 14,
        borderRadius: 8,
    },
    cartIcon: {
        marginRight: 8,
    },
    addToCartText: {
        fontSize: 16,
        fontFamily: fontFamily.bold,
        color: colors.white,
    },
});
