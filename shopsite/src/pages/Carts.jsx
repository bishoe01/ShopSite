import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../components/context/AuthContext';
import CartItem from '../components/ui/CartItem';
import PriceCard from '../components/ui/PriceCard';
import {BsFillPlusCircleFill } from 'react-icons/bs';
import {FaEquals} from 'react-icons/fa';
import Button from '../components/ui/Button';
function Carts(props) {
    const { uid } = useAuthContext();
    const { isLoading, data: products } = useQuery(['carts'], () => getCart(uid))
    const totalPrice = products && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0);
    const SHIPPING = 3000;
    if (isLoading) return <p>Loading...</p>
    const hasProducts = products && products.length > 0;
    return (
        <section className='p-8 flex flex-col'>
            <p className='text-2xl text-center font-bold pb-4 border-b border-brand'>장바구니</p>
            {!hasProducts && <p>장바구니에 담긴 상품이 없습니다.</p>}
            {hasProducts && <>
                <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
                    {products && products.map((product) =>
                        <CartItem key={product.id} product={product} uid={uid}/>
                    )}
                </ul>  
            
            <div className='flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16 '> 
                <PriceCard text="상품 가격" price={totalPrice} />
                <BsFillPlusCircleFill className='shrink-0'/>
                <PriceCard text="배송비" price={SHIPPING} />
                <FaEquals className='shrink-0'/>
                <PriceCard text="총 가격" price={SHIPPING + totalPrice} />
            </div>
            <Button text='주문하기' />
            </>}
        </section>
    );
}

export default Carts;