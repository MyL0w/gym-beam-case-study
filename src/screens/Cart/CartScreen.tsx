import { SafeAreaView } from "react-native";
import { commonStyles } from "@constants/styles";
import { CartScreenModule } from "@modules/CartScreen";
import { useNavigation } from "@react-navigation/native";
import { AppBottomTabsNavigationProp } from "@navigation/types";

type CartScreenProps = {}

const CartScreen = ({}: CartScreenProps) => {
    const navigation = useNavigation<AppBottomTabsNavigationProp<"Cart">>();
    const handleOnPressStartShopping = () => navigation.navigate("Discover");

    return (
        <SafeAreaView style={commonStyles.container}>
            <CartScreenModule onPressStartShopping={handleOnPressStartShopping}/>
        </SafeAreaView>
    );
};

export default CartScreen;
