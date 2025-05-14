import { StyleSheet, Text, TextInput, TextInputProps, View, TouchableOpacity } from "react-native";
import { CONTAINER_WIDTH } from "@constants/index";
import colors from "@constants/colors";
import fontFamily from "@constants/fontFamily";
import { useState } from "react";
import FontAwesome5 from "@react-native-vector-icons/fontawesome5";
import Animated, { FadeIn } from "react-native-reanimated";

type AuthTextInputProps = TextInputProps & {
    label: string;
    isPassword?: boolean;
}

export const AuthTextInput = ({ label, isPassword = false, ...rest }: AuthTextInputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Animated.View style={styles.container} entering={FadeIn.delay(300).duration(600)}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.contentContainer}>
                <TextInput
                    {...rest}
                    style={styles.textInput}
                    selectionColor={colors.orange}
                    secureTextEntry={isPassword && !showPassword}
                />

                {isPassword && (
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        activeOpacity={0.8}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <FontAwesome5
                            name={showPassword ? "eye-slash" : "eye"}
                            size={25}
                            color={colors.gray500}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: CONTAINER_WIDTH,
        height: 82,
        marginVertical: 8,
    },
    contentContainer: {
        width: "100%",
        height: 60,
        borderWidth: 2,
        borderColor: colors.orange,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        fontFamily: fontFamily.semiBold,
        fontSize: 15,
        color: colors.gray500,
        paddingBottom: 5,
        paddingLeft: 15,
    },
    textInput: {
        flex: 1,
        height: "100%",
        fontSize: 20,
        fontFamily: fontFamily.medium,
        color: colors.gray900,
        paddingHorizontal: 15,
    },
    eyeIcon: {
        paddingHorizontal: 15,
        height: "100%",
        justifyContent: "center",
    },
});
