import {useMutation ,useQueryClient} from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { getProducts as fetchProducts, EnrollItem } from '../api/firebase';
export default function useProducts(){
    const queryClient = useQueryClient();
    const ProductsQuery = useQuery(['products'], fetchProducts, {staleTime : 1000 * 60});

    const addProduct = useMutation(({product, url}) => EnrollItem(product, url), {
        onSuccess: () => queryClient.invalidateQueries(['products']),
    });
    return {ProductsQuery, addProduct};
}