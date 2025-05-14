import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { AuthHeaderTitle } from "@components/AuthHeaderTitle/AuthHeaderTitle";
import { AuthTextInput } from "@components/AuthTextInput/AuthTextInput";
import { AuthButton } from "@components/AuthButton/AuthButton";

type RegisterScreenModuleProps = {}

const RegisterScreenModule = ({}: RegisterScreenModuleProps) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.innerContainer}>
                    <View style={styles.topSection}>
                        <AuthHeaderTitle title="Sign up"/>
                        <View style={styles.inputContainer}>
                            <AuthTextInput label="E-mail" textContentType="emailAddress"
                                           autoCapitalize="none"/>
                            <AuthTextInput label="Username" textContentType="username"
                                           autoCapitalize="none"/>
                            <AuthTextInput label="Password" isPassword textContentType="password"
                                           autoCapitalize="none"/>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <AuthButton label="Sign up"/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
    },
    topSection: {
        alignItems: "center",
        width: "100%",
    },
    inputContainer: {
        alignItems: "center",
        width: "100%",
        marginTop: 30,
    },
    buttonContainer: {
        alignItems: "center",
        width: "100%",
        marginVertical: 20,
    },
});

export default RegisterScreenModule;
