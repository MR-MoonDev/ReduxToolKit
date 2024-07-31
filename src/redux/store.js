import {configureStore} from "@reduxjs/toolkit";
import SliceCard from "../slices/SliceCard";
export const store = configureStore({
    reducer:{
          card:SliceCard,
    },
});