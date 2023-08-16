import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { ordered , reStocked } from './icecreamSlice';

const IcecreamView = () => {
  const numberOfIcecreams = useSelector( (state) => state.icecream.numberOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
        <h1>Number of Icereams : {numberOfIcecreams} </h1>
        <button
         type="button"
         onClick={() => dispatch(ordered())}
        >
          Order Icecream
        </button>
        <button
         type="button"
         onClick={() => dispatch(reStocked(5))}
        >
            Restock Icereams
        </button>
    </div>
  )
}

export default IcecreamView