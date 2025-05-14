import { StyleSheet, Text, View } from "react-native";
import { Product } from "@api/types";
import fontFamily from "@constants/fontFamily";
import colors from "@constants/colors";

type DescriptionProps = {
    product: Product
}

export const Description = ({ product }: DescriptionProps) => {
    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    descriptionContainer: {
        marginBottom: 24,
    },
    descriptionTitle: {
        fontSize: 16,
        fontFamily: fontFamily.bold,
        color: colors.gray900,
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: fontFamily.regular,
        color: colors.gray700,
    },
});
