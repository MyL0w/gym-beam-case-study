import { Alert, SafeAreaView } from "react-native";
import { commonStyles } from "@constants/styles";
import { ProfileScreenModule } from "@modules/ProfileScreen";
import useAuth from "@context/Auth/AuthContext";

type ProfileScreenProps = {}

const ProfileScreen = ({}: ProfileScreenProps) => {
    const { user, logout } = useAuth();

    const handlePressLogOut = () => {
        return Alert.alert(
            "Sign Out Confirmation",
            "Are you sure you want to sign out of your account?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Sign Out",
                    onPress: logout,
                    style: "destructive",
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <SafeAreaView style={commonStyles.container}>
            <ProfileScreenModule onPressLogOut={handlePressLogOut} user={user}/>
        </SafeAreaView>
    );
};

export default ProfileScreen;
