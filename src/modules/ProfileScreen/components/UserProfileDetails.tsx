import { StyleSheet, View, Text, Platform } from "react-native";
import { User } from "@api/types";
import { CONTAINER_WIDTH } from "@constants/index";
import colors from "@constants/colors";
import fontFamily from "@constants/fontFamily";
import Animated, { FadeIn } from "react-native-reanimated";

type UserProfileDetailsProps = {
    user: User | null
}

export const UserProfileDetails = ({ user }: UserProfileDetailsProps) => {
    if (!user) {
        return (
            <View style={styles.container}>
                <Text style={styles.emptyText}>No user information available</Text>
            </View>
        );
    }

    return (
        <Animated.View style={styles.container} entering={FadeIn.duration(600)}>
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    <Text style={styles.avatarText}>
                        {user.name.firstname[0]}{user.name.lastname[0]}
                    </Text>
                </View>
                <View style={styles.headerText}>
                    <Text style={styles.name}>{user.name.firstname} {user.name.lastname}</Text>
                    <Text style={styles.username}>@{user.username}</Text>
                </View>
            </View>

            <View style={styles.divider}/>

            <View style={styles.infoSection}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Email:</Text>
                    <Text style={styles.infoValue}>{user.email}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Phone:</Text>
                    <Text style={styles.infoValue}>{user.phone}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Address:</Text>
                    <Text style={styles.infoValue}>
                        {user.address.number} {user.address.street}, {user.address.city}, {user.address.zipcode}
                    </Text>
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "android" ? 20 : 0,
        width: CONTAINER_WIDTH,
        minHeight: 200,
        padding: 20,
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    emptyText: {
        textAlign: "center",
        fontSize: 16,
        color: colors.gray500,
        fontFamily: fontFamily.regular,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    avatarContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.orange,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
    },
    avatarText: {
        fontSize: 24,
        fontFamily: fontFamily.black,
        color: colors.white,
    },
    headerText: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontFamily: fontFamily.extraBold,
        color: colors.black,
        marginBottom: 2,
    },
    username: {
        fontSize: 14,
        fontFamily: fontFamily.medium,
        color: colors.gray700,
    },
    divider: {
        height: 1,
        backgroundColor: colors.gray200,
        marginVertical: 15,
    },
    infoSection: {
        marginTop: 5,
    },
    infoRow: {
        flexDirection: "row",
        marginBottom: 12,
    },
    infoLabel: {
        width: 70,
        fontSize: 14,
        fontFamily: fontFamily.semiBold,
        color: colors.black,
    },
    infoValue: {
        flex: 1,
        fontSize: 14,
        fontFamily: fontFamily.regular,
        color: colors.black,
    },
});
