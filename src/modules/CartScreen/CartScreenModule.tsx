import { StyleSheet } from "react-native";
import colors from "@constants/colors";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import Animated, { FadeIn } from "react-native-reanimated";
import { StartShoppingButton } from "@modules/CartScreen/components/StartShoppingButton";
import { CartTitle } from "@modules/CartScreen/components/CartTitle";
import { CartMessage } from "@modules/CartScreen/components/CartMessage";

type CartScreenModuleProps = {
    onPressStartShopping: () => void
}

const CartScreenModule = ({ onPressStartShopping }: CartScreenModuleProps) => {
    return (
        <Animated.View style={styles.container} entering={FadeIn.duration(600)}>
            <FontAwesome name="shopping-cart" size={80} color={colors.gray900}/>
            <CartTitle/>
            <CartMessage/>
            <StartShoppingButton onPress={onPressStartShopping}/>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default CartScreenModule;
