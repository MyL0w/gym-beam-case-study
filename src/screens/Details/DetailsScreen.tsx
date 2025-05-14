import { SafeAreaView } from "react-native";
import { commonStyles } from "@constants/styles";
import { DetailsScreenModule } from "@modules/DetailsScreen";
import { useRoute } from "@react-navigation/native";
import { AppRouteProp } from "@navigation/types";

type DetailsScreenProps = {}

const DetailsScreen = ({}: DetailsScreenProps) => {
    const route = useRoute<AppRouteProp<"Details">>();

    const product = route.params.product;
    const isOnSale = route.params.isOnSale;

    return (
        <SafeAreaView style={commonStyles.container}>
            <DetailsScreenModule {...{ product, isOnSale }}/>
        </SafeAreaView>
    );
};

export default DetailsScreen;
