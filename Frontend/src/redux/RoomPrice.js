import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    room: [],
    price:0
}

export const RoomPriceSlice = createSlice({
   name: 'price',
   initialState: initialState,
   reducers: {

    setPrice(state,action) {
        console.log(action.payload);
        
        if(state.room.includes(action.payload.room)){
            state.room = state.room.filter(data => data !== action.payload.room);
            state.price = state.price - action.payload.price;
        }else {
            state.room = [...state.room,action.payload.room];
            state.price = state.price + action.payload.price
        }
    }
   }
})
export const RoomPriceAction = RoomPriceSlice.actions;