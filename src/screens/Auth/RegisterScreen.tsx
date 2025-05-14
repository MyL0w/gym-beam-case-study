import { Alert, SafeAreaView } from "react-native";
import { commonStyles } from "@constants/styles";
import { RegisterScreenModule } from "@modules/RegisterScreen";
import { AuthNavigationProp } from "@navigation/types";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

type RegisterScreenProps = {}

const RegisterScreen = ({}: RegisterScreenProps) => {
    const navigation = useNavigation<AuthNavigationProp<"Register">>();

    useEffect(() => {
        Alert.alert(
            "Registration Disabled",
            "We're sorry, but registration is currently disabled. Please try again later.",
            [
                {
                    text: "Go Back",
                    onPress: () => navigation.goBack(),
                    style: "cancel",
                },
            ], { cancelable: false }
        );
    }, [navigation]);

    return (
        <SafeAreaView style={commonStyles.container}>
            <RegisterScreenModule/>
        </SafeAreaView>
    );
};

export default RegisterScreen;
