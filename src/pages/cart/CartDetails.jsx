import React from 'react';
import { useParams } from 'react-router-dom';

const CartDetails = () => {
    const {id} = useParams()
    return (
        <div className='h-screen'>
            <h2>details</h2>
            {
                id
            }
        </div>
    );
};

export default CartDetails;