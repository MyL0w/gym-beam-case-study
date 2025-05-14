import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useSharedValue, withRepeat, withTiming, useAnimatedStyle } from "react-native-reanimated";
import { CONTAINER_WIDTH } from "@constants/index";
import colors from "@constants/colors";
import { SkeletonProductItem } from "@modules/HomeScreen/components/SkeletonLoading/SkeletonProductItem";

type SkeletonLoadingProps = {
    duration?: number;
}

export const SkeletonLoading = ({ duration = 1000 }: SkeletonLoadingProps) => {
    const opacity = useSharedValue(0.3);

    React.useEffect(() => {
        opacity.value = withRepeat(
            withTiming(0.7, { duration }),
            -1,
            true
        );
    }, [opacity, duration]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        };
    });

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <View style={styles.categoryTitleSkeleton} />
            <View style={styles.categoryContainerSkeleton}>
                {[...Array(5)].map((_, index) => (
                    <View key={`category-${index}`} style={styles.categoryItemSkeleton} />
                ))}
            </View>
            {[...Array(3)].map((_, sliderIndex) => (
                <View key={`slider-${sliderIndex}`} style={styles.sliderContainer}>
                    <View style={styles.sliderLabelSkeleton} />
                    <View style={styles.productSliderSkeleton}>
                        {[...Array(4)].map((_, itemIndex) => (
                            <SkeletonProductItem key={`product-${sliderIndex}-${itemIndex}`} />
                        ))}
                    </View>
                </View>
            ))}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: CONTAINER_WIDTH,
        paddingVertical: 10,
    },
    categoryTitleSkeleton: {
        width: 150,
        height: 30,
        backgroundColor: colors.gray300,
        borderRadius: 8,
        marginBottom: 10,
    },
    categoryContainerSkeleton: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 20,
    },
    categoryItemSkeleton: {
        width: 70,
        height: 40,
        backgroundColor: colors.gray300,
        borderRadius: 10,
        margin: 5,
    },
    sliderContainer: {
        marginVertical: 15,
    },
    sliderLabelSkeleton: {
        width: 100,
        height: 24,
        backgroundColor: colors.gray300,
        borderRadius: 8,
        marginBottom: 10,
    },
    productSliderSkeleton: {
        flexDirection: "row",
        height: 250,
    },
});
