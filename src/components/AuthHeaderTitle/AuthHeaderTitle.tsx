import { StyleSheet, View } from "react-native";
import { WIDTH } from "@constants/index";
import fontFamily from "@constants/fontFamily";
import colors from "@constants/colors";
import Animated, { FadeIn } from "react-native-reanimated";

type AuthHeaderTitleProps = {
    title: string
}

export const AuthHeaderTitle = ({ title }: AuthHeaderTitleProps) => {
    return (
        <View style={styles.container}>
            <Animated.Text entering={FadeIn.duration(600)} style={styles.title}>{title}</Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: 80,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    title: {
        fontSize: 40,
        fontFamily: fontFamily.black,
        color: colors.gray900,
        textTransform: "uppercase",
        paddingLeft: 16,
    },
});
