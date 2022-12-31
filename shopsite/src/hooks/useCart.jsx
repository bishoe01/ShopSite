import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateCart, getCart, removeFromCart } from '../api/firebase';
import { useAuthContext } from '../components/context/AuthContext';

export default function useCart(params) {
    const { uid } = useAuthContext();
    const queryClient = useQueryClient();

    const cartQuery = useQuery(['carts', uid || ''], () => getCart(uid), {
        enabled: !!uid,
    });

    const updateCartMutation = useMutation((product) => UpdateCart(uid, product), {
        onSuccess: () => {
            queryClient.invalidateQueries(['carts', uid]);
        }
    });
    const removeFromCartMutation = useMutation((id) => removeFromCart(uid, id), {
        onSuccess: () => {
            queryClient.invalidateQueries(['carts', uid]);
        }
    });

    return { cartQuery, updateCartMutation, removeFromCartMutation };
};
