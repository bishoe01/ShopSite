import React from 'react';

function ProductsCard({ product: { id, price, image, category, title } }) {
    return (
        <div>
            <li>
                <img src={image} alt={title} />
                <div>
                    <h3>{title}</h3>
                    <p>{`₩${price}`}</p>
                    </div>
                    <p>{category}</p>
            </li>
        </div>
    );
}

export default ProductsCard;