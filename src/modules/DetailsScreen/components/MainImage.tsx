import { Image, StyleSheet, Text, View } from "react-native";
import colors from "@constants/colors";
import fontFamily from "@constants/fontFamily";

type MainImageProps = {
    isOnSale?: boolean,
    productImages: { id: string, uri: string }[],
    activeImageIndex: number,
}

export const MainImage = ({ isOnSale, productImages, activeImageIndex }: MainImageProps) => {
    return (
        <View style={styles.mainImageContainer}>
            <Image
                source={{ uri: productImages[activeImageIndex].uri }}
                style={styles.mainImage}
                resizeMode="contain"
            />
            {isOnSale && (
                <View style={styles.saleTag}>
                    <Text style={styles.saleTagText}>40% OFF</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    mainImageContainer: {
        width: "100%",
        height: 300,
        backgroundColor: colors.gray100,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    mainImage: {
        width: "70%",
        height: "70%",
    },
    saleTag: {
        position: "absolute",
        top: 16,
        right: 16,
        backgroundColor: colors.orange,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
    saleTagText: {
        color: colors.white,
        fontSize: 12,
        fontFamily: fontFamily.bold,
    },
});
