import React from 'react';
import { useParams } from 'react-router-dom';

const CartDetails = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <div className='h-[515px]'>
            <h2>details</h2>
            {
                id
            }
         
        </div>
    );
};

export default CartDetails;