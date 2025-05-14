import { StyleSheet, Text, View } from "react-native";
import { Product } from "@api/types";
import { useMemo, useState, useEffect } from "react";
import { CONTAINER_WIDTH } from "@constants/index";
import { CategoryAnimatedButton } from "@modules/HomeScreen/components/CategoryPicker/CategoryAnimatedButton";
import fontFamily from "@constants/fontFamily";
import colors from "@constants/colors";
import Animated, { FadeIn } from "react-native-reanimated";

type CategoryPickerProps = {
    products: Product[];
    onSelectCategory: (products: Product[], title: string) => void;
}

export const CategoryPicker = ({ products, onSelectCategory }: CategoryPickerProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [animatedItems, setAnimatedItems] = useState<string[]>([]);

    const categories = useMemo(() => {
        const uniqueCategories = [...new Set(products.map(product => product.category))];
        return ["all", ...uniqueCategories];
    }, [products]);

    useEffect(() => {
        const shuffledCategories = [...categories].sort(() => Math.random() - 0.5);

        setAnimatedItems([]);

        shuffledCategories.forEach((category) => {
            const delay = 100 + Math.random() * 500;
            setTimeout(() => {
                setAnimatedItems(prev => [...prev, category]);
            }, delay);
        });
    }, [categories]);

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);

        const title = category === "all"
            ? "All products"
            : category.charAt(0).toUpperCase() + category.slice(1);

        const categoryProducts = category === "all"
            ? products
            : products.filter(product => product.category === category);

        onSelectCategory(categoryProducts, title);
        setSelectedCategory("");
    };

    return (
        <Animated.View style={styles.container} entering={FadeIn.duration(600)}>
            <Text style={styles.title}>Categories:</Text>
            <View style={styles.gridContainer}>
                {categories.map((category) => {
                    const isAnimated = animatedItems.includes(category);
                    return (
                        <CategoryAnimatedButton
                            key={category}
                            category={category}
                            isSelected={selectedCategory === category}
                            onPress={() => handleCategorySelect(category)}
                            isVisible={isAnimated}
                        />
                    );
                })}
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: CONTAINER_WIDTH,
        marginVertical: 10,
    },
    title: {
        fontSize: 30,
        fontFamily: fontFamily.extraBold,
        color: colors.gray900,
        paddingBottom: 10,
    },
    gridContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
    },
});
