import React from 'react';

function ProductsCard({ product: { id, price, image, category, title } }) {
    return (
            <li className='rounded-lg shadow-md overflow-hidden cursor-pointer'>
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