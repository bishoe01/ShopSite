import React from 'react';
import ProductsCard from '../components/ProductsCard';
import useProducts from '../hooks/useProducts';
function Products(props) {
    const {ProductsQuery : {isLoading, error, data: products}} = useProducts();
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