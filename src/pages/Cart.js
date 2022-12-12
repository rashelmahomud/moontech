import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from '../compornents/ProductCart';

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 p-3'>
            {
                cart.sort((a, b) => a._id - b._id)
                .map(product => <ProductCart product={product} />)
            }
        </div>
    );
};

export default Cart;