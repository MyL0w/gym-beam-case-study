import { StyleSheet } from "react-native";
import { LogOutButton } from "@modules/ProfileScreen/components/LogOutButton";
import { User } from "@api/types";
import { UserProfileDetails } from "@modules/ProfileScreen/components/UserProfileDetails";
import Animated, { FadeIn } from "react-native-reanimated";

type ProfileScreenModuleProps = {
    onPressLogOut: () => void,
    user: User | null
}

const ProfileScreenModule = ({ onPressLogOut, user }: ProfileScreenModuleProps) => {
    return (
        <Animated.View style={styles.container} entering={FadeIn.duration(600)}>
            <UserProfileDetails user={user}/>
            <LogOutButton onPress={onPressLogOut}/>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export default ProfileScreenModule;
