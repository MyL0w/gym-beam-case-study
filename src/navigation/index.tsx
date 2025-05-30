import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "@navigation/AuthStack";
import useAuth from "@context/Auth/AuthContext";
import { AppBottomTabs } from "@navigation/AppBottomTabs";
import { LoadingScreen } from "@components/LoadingScreen/LoadingScreen";

const Navigation = () => {
    const { user, initialize } = useAuth();

    return (
        <NavigationContainer>
            {initialize ? (
                <LoadingScreen/>
            ) : (
                !user ? <AuthStack/> : <AppBottomTabs/>
            )}
        </NavigationContainer>
    );
};

export default Navigation;
