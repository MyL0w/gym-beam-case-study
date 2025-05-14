import { SafeAreaView } from "react-native";
import { useGetAllProductsQuery } from "@services/use-get-all-products-query/useGetAllProductsQuery";
import { commonStyles } from "@constants/styles";
import { HomeScreenModule } from "@modules/HomeScreen";
import { Product } from "@api/types";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "@navigation/types";

type HomeScreenProps = {}

const HomeScreen = ({}: HomeScreenProps) => {
    const navigation = useNavigation<AppNavigationProp<"Home">>();
    const { allProducts, isLoading } = useGetAllProductsQuery();

    const handleOnPressSeeAll = (products: Product[], title: string,
                                 isOnSale ?: boolean) => navigation.navigate("AllProducts", {
        products,
        isOnSale,
        title,
    });

    const handleOnPressProduct = (product: Product, isOnSale?: boolean) => navigation.navigate("Details", {
        product,
        isOnSale,
    });

    return (
        <SafeAreaView style={commonStyles.container}>
            <HomeScreenModule onPressSeeAll={handleOnPressSeeAll}
                              onPressProduct={handleOnPressProduct}
                              {...{ allProducts, isLoading }}/>
        </SafeAreaView>
    );
};

export default HomeScreen;
