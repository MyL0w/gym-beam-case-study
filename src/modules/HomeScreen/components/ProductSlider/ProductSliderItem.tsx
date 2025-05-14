import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import colors from "@constants/colors";
import { Product } from "@api/types";
import fontFamily from "@constants/fontFamily";
import { memo } from "react";
import calculateDiscountedPrice from "@utils/calculateDiscountedPrice";

type ProductSliderItemProps = {
    product: Product,
    marginLeft: number,
    marginRight: number,
    onPress?: (product: Product) => void,
    isOnSale?: boolean,
}

const ProductSliderItemComponent = ({
                                        product,
                                        marginLeft,
                                        marginRight,
                                        onPress,
                                        isOnSale = false,
                                    }: ProductSliderItemProps) => {

    const discountedPrice = isOnSale ? calculateDiscountedPrice(product.price) : null;

    return (
        <TouchableOpacity
            style={[styles.container, { marginRight, marginLeft }]}
            onPress={() => onPress && onPress(product)}
            activeOpacity={0.7}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                    resizeMode="contain"
                />
                {isOnSale && (
                    <View style={styles.saleTag}>
                        <Text style={styles.saleTagText}>On Sale</Text>
                    </View>
                )}
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                    {product.title}
                </Text>
                <View style={styles.priceRatingContentContainer}>
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
                        <Text style={styles.rating}>{product.rating.rate.toFixed(1)}</Text>
                        <Text style={styles.ratingCount}>({product.rating.count})</Text>
                    </View>
                </View>
                <Text style={styles.category}>{product.category}</Text>
            </View>
        </TouchableOpacity>
    );
};

export const ProductSliderItem = memo(ProductSliderItemComponent);

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 250,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: "hidden",
        marginBottom: 5,
    },
    imageContainer: {
        width: "100%",
        height: 140,
        backgroundColor: colors.gray100,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        position: "relative",
    },
    image: {
        width: "90%",
        height: "90%",
    },
    saleTag: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: colors.orange,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    saleTagText: {
        color: colors.white,
        fontSize: 10,
        fontFamily: fontFamily.bold,
    },
    infoContainer: {
        padding: 12,
        width: "100%",
    },
    title: {
        fontSize: 14,
        fontFamily: fontFamily.semiBold,
        color: colors.gray900,
        marginBottom: 8,
    },
    priceRatingContentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    price: {
        fontSize: 16,
        fontFamily: fontFamily.bold,
        color: colors.orange,
    },
    discountedPrice: {
        fontSize: 16,
        fontFamily: fontFamily.bold,
        color: colors.orange,
        marginRight: 5,
    },
    originalPrice: {
        fontSize: 12,
        fontFamily: fontFamily.regular,
        color: colors.gray500,
        textDecorationLine: "line-through",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    rating: {
        fontSize: 12,
        fontFamily: fontFamily.semiBold,
        color: colors.orange,
        marginRight: 2,
    },
    ratingCount: {
        fontSize: 10,
        color: colors.gray600,
        fontFamily: fontFamily.regular,
    },
    category: {
        fontSize: 11,
        color: colors.gray500,
        fontFamily: fontFamily.regular,
        textTransform: "capitalize",
    },
});
