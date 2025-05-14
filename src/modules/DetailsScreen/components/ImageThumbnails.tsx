import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import colors from "@constants/colors";
import { Dispatch, SetStateAction } from "react";

type ImageThumbnailsProps = {
    productImages: { id: string, uri: string }[],
    activeImageIndex: number,
    setActiveImageIndex: Dispatch<SetStateAction<number>>
}

export const ImageThumbnails = ({ productImages, activeImageIndex, setActiveImageIndex }: ImageThumbnailsProps) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.thumbnailScroll}
            contentContainerStyle={styles.thumbnailContainer}
        >
            {productImages.map((image, index) => (
                <TouchableOpacity
                    key={image.id}
                    onPress={() => setActiveImageIndex(index)}
                    style={[
                        styles.thumbnailButton,
                        activeImageIndex === index && styles.activeThumbnail,
                    ]}
                >
                    <Image
                        source={{ uri: image.uri }}
                        style={styles.thumbnailImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    thumbnailScroll: {
        marginTop: 10,
    },
    thumbnailContainer: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    thumbnailButton: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 8,
        padding: 4,
        borderWidth: 1,
        borderColor: colors.gray300,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    activeThumbnail: {
        borderColor: colors.orange,
    },
    thumbnailImage: {
        width: "90%",
        height: "90%",
    },
});
