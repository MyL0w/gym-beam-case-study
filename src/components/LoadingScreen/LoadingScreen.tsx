import { ActivityIndicator, StyleSheet, View } from "react-native";
import colors from "@constants/colors";

type LoadingScreenProps = {}

export const LoadingScreen = ({}: LoadingScreenProps) => {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.orange}/>
        </View>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
    },
});
