import React from "react";
import { StyleSheet, View } from "react-native";
import { Product } from "@api/types";
import { CategoryPicker } from "@modules/HomeScreen/components/CategoryPicker/CategoryPicker";
import { ProductSlider } from "@modules/HomeScreen/components/ProductSlider/ProductSlider";
import { AnimatedHeaderScroll } from "@components/AnimatedHeaderScroll/AnimatedHeaderScroll";
import { SkeletonLoading } from "@modules/HomeScreen/components/SkeletonLoading/SkeletonLoading";

type HomeScreenModuleProps = {
    allProducts: Product[],
    isLoading: boolean,
    onPressSeeAll: (products: Product[], title: string, isOnSale?: boolean) => void,
    onPressProduct: (product: Product, isOnSale?: boolean) => void,
}

const HomeScreenModule = ({ allProducts, isLoading, onPressSeeAll, onPressProduct }: HomeScreenModuleProps) => {

    const handleOnPressSeeAllOnSale = (products: Product[]) => onPressSeeAll(products, "On sale", true);
    const handleOnPressSeeAllForYou = (products: Product[]) => onPressSeeAll(products, "For you");
    const handleOnPressSeeAll = (products: Product[]) => onPressSeeAll(products, "All products");
    const handleOnPressProductOnSale = (product: Product) => onPressProduct(product, true);

    return (
        <View style={styles.container}>
            <AnimatedHeaderScroll>
                {isLoading ? (
                    <SkeletonLoading/>
                ) : (
                    <>
                        <CategoryPicker products={allProducts} onSelectCategory={onPressSeeAll}/>
                        <ProductSlider label="For you" products={allProducts}
                                       onPressProduct={onPressProduct}
                                       onPressSeeAll={handleOnPressSeeAllForYou}/>
                        <ProductSlider label="On sale" products={allProducts} onPressSeeAll={handleOnPressSeeAllOnSale}
                                       isOnSale onPressProduct={handleOnPressProductOnSale}/>
                        <ProductSlider label="All products" products={allProducts} onPressProduct={onPressProduct}
                                       onPressSeeAll={handleOnPressSeeAll}/>
                    </>
                )}
            </AnimatedHeaderScroll>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeScreenModule;
