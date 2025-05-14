import { StyleSheet, ScrollView, View, Alert } from "react-native";
import { useState } from "react";
import { Product } from "@api/types";
import { MainImage } from "@modules/DetailsScreen/components/MainImage";
import { ImageThumbnails } from "@modules/DetailsScreen/components/ImageThumbnails";
import calculateDiscountedPrice from "@utils/calculateDiscountedPrice";
import { ProductInfo } from "@modules/DetailsScreen/components/ProductInfo/ProductInfo";
import { AddToCartButton } from "@modules/DetailsScreen/components/AddToCartButton";
import Animated, { FadeIn } from "react-native-reanimated";

type DetailsScreenModuleProps = {
    product: Product;
    isOnSale?: boolean;
}

const DetailsScreenModule = ({
                                 product,
                                 isOnSale = false,
                             }: DetailsScreenModuleProps) => {
    const [quantity, setQuantity] = useState(1);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const discountedPrice = isOnSale ? calculateDiscountedPrice(product?.price || 0) : null;

    const handleIncreaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleAddToCart = () => {
        return Alert.alert("Product Unavailable", "This item is currently out of stock. Please check back later.");
    };

    const productImages = [
        { id: "1", uri: product.image },
        { id: "2", uri: product.image },
        { id: "3", uri: product.image },
    ];

    return (
        <Animated.View style={styles.container} entering={FadeIn.duration(600)}>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                <MainImage {...{ activeImageIndex, productImages, isOnSale }}/>
                <ImageThumbnails {...{ activeImageIndex, productImages, setActiveImageIndex }}/>
                <ProductInfo {...{
                    product,
                    handleIncreaseQuantity,
                    handleDecreaseQuantity,
                    quantity,
                    isOnSale,
                    discountedPrice,
                }}/>
                <View style={styles.bottomSpacing}/>
            </ScrollView>
            <AddToCartButton {...{ handleAddToCart }}/>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        paddingBottom: 80,
    },
    bottomSpacing: {
        height: 16,
    },
});

export default DetailsScreenModule;
