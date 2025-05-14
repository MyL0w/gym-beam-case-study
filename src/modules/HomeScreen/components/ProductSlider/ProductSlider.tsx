import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { CONTAINER_WIDTH, WIDTH } from "@constants/index";
import fontFamily from "@constants/fontFamily";
import colors from "@constants/colors";
import { ProductSliderItem } from "@modules/HomeScreen/components/ProductSlider/ProductSliderItem";
import { Product } from "@api/types";
import { useMemo } from "react";

type ProductSliderProps = {
    label: string,
    products: Product[],
    isOnSale?: boolean,
    onPressSeeAll: (products: Product[]) => void,
    onPressProduct: (product: Product) => void,
}

const shuffleArray = (array: Product[]) => {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
};

export const ProductSlider = ({ label, products, isOnSale, onPressSeeAll, onPressProduct }: ProductSliderProps) => {

    const shuffledProducts = useMemo(() => shuffleArray(products), [products]);

    const paddingHorizontal = (WIDTH - CONTAINER_WIDTH) / 2;

    const handleOnPressSeeAll = () => onPressSeeAll(shuffledProducts);

    return (
        <Animated.View style={styles.container} entering={FadeIn.duration(600)}>
            <View style={styles.titleContainer}>
                <Text style={styles.label}>{label}:</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={handleOnPressSeeAll} style={styles.seeAllButton}>
                    <Text style={styles.seeAllButtonText}>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView} horizontal
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        contentContainerStyle={{ paddingHorizontal }}>
                {shuffledProducts.map((item, index) => (
                    <ProductSliderItem marginLeft={index === 0 ? 0 : 10}
                                       isOnSale={isOnSale}
                                       onPress={onPressProduct}
                                       marginRight={index === products.length - 1 ? 0 : 10}
                                       key={index} product={item}/>
                ))}
            </ScrollView>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        marginVertical: 10,
        alignItems: "center",
    },
    titleContainer: {
        width: CONTAINER_WIDTH,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    label: {
        fontSize: 30,
        fontFamily: fontFamily.extraBold,
        color: colors.gray900,
    },
    seeAllButton: {
        paddingHorizontal: 15,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.orange,
    },
    seeAllButtonText: {
        fontSize: 15,
        fontFamily: fontFamily.semiBold,
        color: colors.orange,
    },
    scrollView: {
        marginTop: 10,
    },
});
