import React from 'react';
import {BsCart4} from 'react-icons/bs';
import useCart from '../hooks/useCart';
function CartBadge(props) {
    const {cartQuery : {data : products},} = useCart();
    return (
        <div className='relative'>
            <BsCart4 className='text-4xl' />
            {products && <p className='w-6 h-6 text-center bg-brand text-white font-bold rounded-full absolute -top-1 -right-2'>{products.length}</p>}
        </div>
    );
}

export default CartBadge;