import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "@constants/colors";

export const SkeletonProductItem = () => {
    return (
        <View style={styles.skeletonItem}>
            <View style={styles.skeletonImage} />
            <View style={styles.skeletonInfo}>
                <View style={styles.skeletonTitle} />
                <View style={styles.skeletonPriceRating}>
                    <View style={styles.skeletonPrice} />
                    <View style={styles.skeletonRating} />
                </View>
                <View style={styles.skeletonCategory} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    skeletonItem: {
        width: 200,
        height: 250,
        borderRadius: 10,
        backgroundColor: colors.white,
        marginRight: 10,
        overflow: "hidden",
    },
    skeletonImage: {
        width: "100%",
        height: 140,
        backgroundColor: colors.gray200,
    },
    skeletonInfo: {
        padding: 12,
    },
    skeletonTitle: {
        height: 14,
        backgroundColor: colors.gray200,
        borderRadius: 4,
        marginBottom: 8,
    },
    skeletonPriceRating: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 6,
    },
    skeletonPrice: {
        width: 60,
        height: 16,
        backgroundColor: colors.gray200,
        borderRadius: 4,
    },
    skeletonRating: {
        width: 40,
        height: 12,
        backgroundColor: colors.gray200,
        borderRadius: 4,
    },
    skeletonCategory: {
        width: 80,
        height: 11,
        backgroundColor: colors.gray200,
        borderRadius: 4,
    },
});
