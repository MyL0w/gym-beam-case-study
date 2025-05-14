import { StyleSheet, Text, View } from "react-native";
import colors from "@constants/colors";
import { Product } from "@api/types";
import { CONTAINER_WIDTH } from "@constants/index";
import fontFamily from "@constants/fontFamily";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import { QuantitySelector } from "@modules/DetailsScreen/components/ProductInfo/QuantitySelector";
import { Description } from "@modules/DetailsScreen/components/ProductInfo/Description";

type ProductInfoProps = {
    isOnSale?: boolean,
    product: Product,
    discountedPrice?: number | null,
    quantity: number,
    handleDecreaseQuantity: () => void,
    handleIncreaseQuantity: () => void
}

export const ProductInfo = ({
                                isOnSale,
                                product,
                                discountedPrice,
                                quantity,
                                handleDecreaseQuantity,
                                handleIncreaseQuantity,
                            }: ProductInfoProps) => {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.category}>{product.category.toUpperCase()}</Text>
            <Text style={styles.title}>{product.title}</Text>

            <View style={styles.priceRatingContainer}>
                <View style={styles.priceContainer}>
                    {isOnSale ? (
                        <>
                            <Text style={styles.discountedPrice}>${discountedPrice?.toFixed(2)}</Text>
                            <Text style={styles.originalPrice}>${product.price.toFixed(2)}</Text>
                        </>
                    ) : (
                        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                    )}
                </View>
                <View style={styles.ratingContainer}>
                    <FontAwesome name="star" size={16} color={colors.orange}/>
                    <Text style={styles.rating}>{product.rating.rate.toFixed(1)}</Text>
                    <Text style={styles.ratingCount}>({product.rating.count} reviews)</Text>
                </View>
            </View>
            <QuantitySelector {...{ quantity, handleDecreaseQuantity, handleIncreaseQuantity }}/>
            <Description {...{ product }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        padding: 16,
        width: CONTAINER_WIDTH,
        alignSelf: "center",
    },
    category: {
        fontSize: 12,
        fontFamily: fontFamily.medium,
        color: colors.gray600,
        marginBottom: 6,
    },
    title: {
        fontSize: 20,
        fontFamily: fontFamily.bold,
        color: colors.gray900,
        marginBottom: 12,
    },
    priceRatingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    price: {
        fontSize: 24,
        fontFamily: fontFamily.bold,
        color: colors.orange,
    },
    discountedPrice: {
        fontSize: 24,
        fontFamily: fontFamily.bold,
        color: colors.orange,
        marginRight: 8,
    },
    originalPrice: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray500,
        textDecorationLine: "line-through",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    rating: {
        fontSize: 14,
        fontFamily: fontFamily.semiBold,
        color: colors.gray900,
        marginLeft: 4,
        marginRight: 2,
    },
    ratingCount: {
        fontSize: 12,
        fontFamily: fontFamily.regular,
        color: colors.gray600,
    },
});
