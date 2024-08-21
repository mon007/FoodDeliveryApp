import { createSlice } from '@reduxjs/toolkit'
import Restuarant from '../screens/Restuarant'

const initialState = {
  restuarant: 0,
}

export const RestuarantSlice = createSlice({
  name: 'restuarant',
  initialState,
  reducers: {
    setRestuarant: (state, action) => {
      state.restuarant = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestuarant } = RestuarantSlice.actions;
export const selectRestuarant = state=> state.restuarant.restuarant;

export default RestuarantSlice.reducer