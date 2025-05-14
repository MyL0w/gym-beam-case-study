import { StyleSheet, Text, Linking } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { CONTAINER_WIDTH } from "@constants/index";
import fontFamily from "@constants/fontFamily";
import colors from "@constants/colors";

type PrivacyPolicyProps = {}

const TERMS_URL = "https://gymbeam.sk/content/obchodne-podmienky";
const PRIVACY_URL = "https://gymbeam.sk/content/ochrana-osobnych-udajov";

export const PrivacyPolicyText = ({}: PrivacyPolicyProps) => {

    const openUrl = (url: string) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    };

    return (
        <Animated.View
            entering={FadeIn.delay(300).duration(600)}
            style={styles.container}
        >
            <Text style={styles.policyText}>
                By continuing, you agree to our{" "}
                <Text
                    suppressHighlighting
                    style={styles.linkText}
                    onPress={() => openUrl(TERMS_URL)}
                >
                    Terms of Service
                </Text>
                {" "}and{" "}
                <Text
                    suppressHighlighting
                    style={styles.linkText}
                    onPress={() => openUrl(PRIVACY_URL)}
                >
                    Privacy Policy
                </Text>
            </Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: CONTAINER_WIDTH,
        alignItems: "center",
        justifyContent: "center",
    },
    policyText: {
        fontFamily: fontFamily.medium,
        fontSize: 14,
        lineHeight: 20,
        color: colors.white,
        textAlign: "center",
    },
    linkText: {
        fontFamily: fontFamily.bold,
        color: colors.gray50,
    },
});
