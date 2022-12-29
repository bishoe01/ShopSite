import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import ProductsCard from '../components/ProductsCard';
function Products(props) {
    const { isLoading, data: products, error } = useQuery(['products'], getProducts);
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <div>Error</div>}
            <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
            {products && products.map((product) => (
                <ProductsCard key={product.id} product={product} />
            ))
            }
            </ul>
        </div>  
    );
}

export default Products;