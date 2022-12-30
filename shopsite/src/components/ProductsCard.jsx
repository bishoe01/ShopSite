import React from 'react';
import {useNavigate} from 'react-router-dom';
function ProductsCard({product, product: { id, price, image, category, title } }) {
    const navigate = useNavigate();
    return (
            <li onClick={()=>navigate(`/products/${id}` ,{state : {product : product}})} className='rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 easy-in-out duration-300'>
                <img className='w-full' src={image} alt={title} />
                <div className='mt-2 px-2 text-lg flex justify-between items-center'>
                    <h3 className='truncate'>{title}</h3>
                    <p>{`₩${price}`}</p>
                    </div>
                    <p className='mb-2 px-2 text-gray-400 text-center'>{category}</p>
            </li>
    );
}

export default ProductsCard;