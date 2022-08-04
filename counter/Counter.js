// import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import{ addToCart } from './counterSlice'
import { addToFav } from './addFav';

export function Counter() {
  const count = useSelector((state)=>state);
  console.log("count",count);
  const dispatch = useDispatch();

  const hendleAddToCart=()=>{
    dispatch(addToCart(([{id:1, name:"react"}])))
  };

  const hendleFav=()=>{
    dispatch(addToFav(([{id:1,name:"js"}])))
  }
  
  return (
    <div>
      <button onClick={()=>hendleAddToCart()}>update</button>
      <button onClick={()=>hendleFav()}>Fav</button>

    </div>
  );
}
