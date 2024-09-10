import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice";
import { RoomPriceSlice } from "./RoomPrice";

export const store = configureStore({

    reducer: {
        authentication: authSlice.reducer,
        price: RoomPriceSlice.reducer,
    }

})