import { createSlice } from '@reduxjs/toolkit';

export const FavSlice = createSlice({
    name: 'counter',
    initialState:{
      Favorite:[],
    },
    
    reducers: {
        addToFav:(state,action)=>{
            state.Favorite=action.payload
          }
    },
});

export const { addToFav }= FavSlice.actions;
export default FavSlice.reducer