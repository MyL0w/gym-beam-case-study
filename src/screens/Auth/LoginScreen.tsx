import { SafeAreaView } from "react-native";
import { LoginScreenModule } from "@modules/LoginScreen";
import { commonStyles } from "@constants/styles";
import useAuth from "@context/Auth/AuthContext";

type LoginScreenProps = {}

const LoginScreen = ({}: LoginScreenProps) => {

    const { login, isLoading } = useAuth();

    const handleSignIn = async (username: string, password: string) => {
        try {
            await login(username, password);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <SafeAreaView style={commonStyles.container}>
            <LoginScreenModule onPressSignIn={handleSignIn} isLoading={isLoading}/>
        </SafeAreaView>
    );
};

export default LoginScreen;
