import { createSlice} from "@reduxjs/toolkit";
const  SliceCard = createSlice({
    name:"cart",
    initialState:[{name:"Muneeb",price:9999}],
    reducers:{
    addItem:(state,action)=>{
       state.push(action.payload);
    },
    },
});
export const {addItem} = SliceCard.actions;
export default SliceCard.reducer;