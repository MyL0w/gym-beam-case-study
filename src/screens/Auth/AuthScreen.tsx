import { View } from "react-native";
import { AuthScreenModule } from "@modules/AuthScreen";
import { AuthNavigationProp } from "@navigation/types";
import { useNavigation } from "@react-navigation/native";
import { commonStyles } from "@constants/styles";

type AuthScreenProps = {}

const AuthScreen = ({}: AuthScreenProps) => {
    const navigation = useNavigation<AuthNavigationProp<"Auth">>();

    const handleLoginPress = () => {
        navigation.navigate("Login");
    };

    const handleRegisterPress = () => {
        navigation.navigate("Register");
    };
    return (
        <View style={commonStyles.container}>
            <AuthScreenModule onLoginPress={handleLoginPress}
                              onRegisterPress={handleRegisterPress}/>
        </View>
    );
};

export default AuthScreen;
