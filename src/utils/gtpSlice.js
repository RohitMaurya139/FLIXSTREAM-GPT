import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
    name: "gpt",
    initialState: {
        showGtpSearch: false,
        showGtpSearchButton: false
    },

    reducers: {
        toggleGtpSearchView: (state)=>{
            state.showGtpSearch = !state.showGtpSearch;
        },
         toggleGtpSearchButton: (state)=>{
            state.showGtpSearchButton = !state.showGtpSearchButton;
        }
    }
})
export const { toggleGtpSearchView, toggleGtpSearchButton } = gtpSlice.actions;
export default  gtpSlice.reducer