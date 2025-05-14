import { ScrollView, StyleSheet, View } from "react-native";
import { Product } from "@api/types";
import { ProductItem } from "@modules/AllProductsScreen/components/ProductItem";

type AllProductsScreenModuleProps = {
    products: Product[],
    isOnSale?: boolean,
    onPressProduct: (product: Product) => void,
}

const AllProductsScreenModule = ({ products, isOnSale, onPressProduct }: AllProductsScreenModuleProps) => {
    return (
        <View style={styles.container}>
            <ScrollView scrollEventThrottle={16}>
                {products.map((item, index) => <ProductItem index={index} product={item} key={index}
                                                            isOnSale={isOnSale} onPress={onPressProduct}/>)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
});

export default AllProductsScreenModule;
