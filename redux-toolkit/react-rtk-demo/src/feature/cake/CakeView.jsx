import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { ordered , reStocked } from './cakeSlice';

const CakeView = () => {
  const numberOfCakes = useSelector( (state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Number of cakes : {numberOfCakes}</h1>
        <button
         type="button"
         onClick={() => dispatch(ordered())}
        >
          Order Cake
        </button>
        <button
         type="button"
         onClick={() => dispatch(reStocked())}
        >
            Restock Cakes
        </button>
    </div>
  )
}

export default CakeView