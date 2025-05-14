import { SafeAreaView } from "react-native";
import { commonStyles } from "@constants/styles";
import { AllProductsScreenModule } from "@modules/AllProductsScreen";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigationProp, AppRouteProp } from "@navigation/types";
import { Product } from "@api/types";

type AllProductsScreenProps = {}

const AllProductsScreen = ({}: AllProductsScreenProps) => {
    const navigation = useNavigation<AppNavigationProp<"AllProducts">>();
    const route = useRoute<AppRouteProp<"AllProducts">>();

    const products = route.params.products;
    const isOnSale = route.params.isOnSale;

    const handleOnPressProduct = (product: Product) => navigation.navigate("Details", { product, isOnSale });

    return (
        <SafeAreaView style={commonStyles.container}>
            <AllProductsScreenModule onPressProduct={handleOnPressProduct}
                                     {...{ products, isOnSale }}/>
        </SafeAreaView>
    );
};
export default AllProductsScreen;
