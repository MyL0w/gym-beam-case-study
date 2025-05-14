import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { AuthHeadLine } from "./components/AuthHeadLine";
import { LogoTitle } from "@assets/svg";
import Animated, { FadeIn } from "react-native-reanimated";
import { AuthButton } from "@components/AuthButton/AuthButton";
import { RegistrationButton } from "@modules/AuthScreen/components/RegistrationButton";
import { PrivacyPolicyText } from "@modules/AuthScreen/components/PrivacyPolicyText";

type AuthScreenModuleProps = {
    onLoginPress: () => void;
    onRegisterPress: () => void;
}


const AuthScreenModule = ({ onLoginPress, onRegisterPress }: AuthScreenModuleProps) => {
    return (
        <ImageBackground style={styles.container} source={require("../../assets/images/pexels-cottonbro-7793230.jpg")}>
            <View style={styles.overlay}/>
            <SafeAreaView style={styles.container}>
                <Animated.View entering={FadeIn.delay(300)}>
                    <LogoTitle height={140} width={240}/>
                </Animated.View>
                <AuthHeadLine/>
                <View style={styles.buttonContainer}>
                    <AuthButton label="sign in" onPress={onLoginPress}/>
                    <RegistrationButton onPress={onRegisterPress}/>
                    <PrivacyPolicyText/>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 25,
    },
    overlay: {
        flex: 1,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        position: "absolute",
        backgroundColor: "rgba(0, 0,0,0.6)",
    },
});

export default AuthScreenModule;
