import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "@constants/colors";
import fontFamily from "@constants/fontFamily";
import FontAwesome from "@react-native-vector-icons/fontawesome";

type QuantitySelectorProps = {
    handleDecreaseQuantity: () => void,
    quantity: number,
    handleIncreaseQuantity: () => void
}

export const QuantitySelector = ({
                                     handleIncreaseQuantity,
                                     handleDecreaseQuantity,
                                     quantity,
                                 }: QuantitySelectorProps) => {
    return (
        <View style={styles.quantityContainer}>
            <Text style={styles.quantityLabel}>Quantity:</Text>
            <View style={styles.quantityControls}>
                <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={handleDecreaseQuantity}
                    disabled={quantity <= 1}
                >
                    <FontAwesome name="minus" size={14}
                                 color={quantity <= 1 ? colors.gray400 : colors.gray700}/>
                </TouchableOpacity>
                <Text style={styles.quantityValue}>{quantity}</Text>
                <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={handleIncreaseQuantity}
                >
                    <FontAwesome name="plus" size={14} color={colors.gray700}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        paddingVertical: 14,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.gray200,
    },
    quantityLabel: {
        fontSize: 16,
        fontFamily: fontFamily.medium,
        color: colors.gray800,
    },
    quantityControls: {
        flexDirection: "row",
        alignItems: "center",
    },
    quantityButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: colors.gray200,
        justifyContent: "center",
        alignItems: "center",
    },
    quantityValue: {
        fontSize: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.gray900,
        marginHorizontal: 12,
        minWidth: 24,
        textAlign: "center",
    },
});
