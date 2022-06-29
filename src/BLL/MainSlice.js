import { createSlice } from "@reduxjs/toolkit"
const MainSlice = createSlice({
    name: "Main",
    initialState: {
        checkedRadio: "Покупатель"
    },
    reducers: {
        SetcheckedRadio(state, action) {
            state.checkedRadio = action.payload
        }
    }
})
export default MainSlice.reducer
export const { SetcheckedRadio } = MainSlice.actions