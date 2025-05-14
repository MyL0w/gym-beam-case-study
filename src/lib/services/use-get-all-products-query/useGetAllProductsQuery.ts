import { useQuery } from "@tanstack/react-query";
import { Product } from "@api/types";
import { PRODUCTS } from "@api/apiEndpoints";
import axios from "axios";

export const useGetAllProductsQuery = () => {
    const { data, ...rest } = useQuery({
        queryKey: ["useGetAllProductsQuery"],
        queryFn: async () => {
            const res = await axios.get<Product[]>(PRODUCTS, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return res.data;
        },
    });

    return {
        allProducts: data ?? [],
        ...rest,
    };
};
