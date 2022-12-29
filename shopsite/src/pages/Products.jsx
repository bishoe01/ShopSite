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
            {products && products.map((product) => (
                <ProductsCard key={product.id} product={product} />
            ))
            }
        </div>
    );
}

export default Products;