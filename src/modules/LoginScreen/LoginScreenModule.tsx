import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { AuthHeaderTitle } from "@components/AuthHeaderTitle/AuthHeaderTitle";
import { AuthTextInput } from "@components/AuthTextInput/AuthTextInput";
import { AuthButton } from "@components/AuthButton/AuthButton";
import { useState } from "react";

type LoginScreenModuleProps = {
    onPressSignIn: (username: string, password: string) => void,
    isLoading: boolean
}

const LoginScreenModule = ({ onPressSignIn, isLoading }: LoginScreenModuleProps) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const disabledButton = !username || !password || isLoading;

    const handleUsernameChange = (text: string) => setUsername(text);
    const handlePasswordChange = (text: string) => setPassword(text);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.innerContainer}>
                    <View style={styles.topSection}>
                        <AuthHeaderTitle title="Sign in"/>
                        <View style={styles.inputContainer}>
                            <AuthTextInput label="Username" textContentType="username"
                                           value={username}
                                           autoCapitalize="none" onChangeText={handleUsernameChange}/>
                            <AuthTextInput label="Password" isPassword textContentType="password"
                                           value={password}
                                           autoCapitalize="none" onChangeText={handlePasswordChange}/>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <AuthButton label="Sign in"
                                    isLoading={isLoading}
                                    onPress={() => onPressSignIn(username, password)}
                                    disabled={disabledButton}/>
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

export default LoginScreenModule;
