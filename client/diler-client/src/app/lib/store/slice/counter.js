// slice/counter.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectCrmBoolean: false,
    fetchListBoolean: false,
    crmName: 'tro',
    listName: 'tanfo',
};

const counterSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    selectCrmToggle: (state) => { state.selectCrmBoolean = !state.selectCrmBoolean; },
    selectCrmSetFalse: (state) => { state.selectCrmBoolean = false; },
    fetchListToggle: (state) => { state.fetchListBoolean = !state.fetchListBoolean; },
    fetchListSetFalse: (state) => { state.fetchListBoolean = false; },
    setCrmName: (state, action) => {state.crmName = action.payload},
    setlistName: (state, action) => {state.listName = action.payload},
  },
});

// Action creators are generated for each case reducer function
export const { selectCrmToggle, selectCrmSetFalse, fetchListToggle, fetchListSetFalse, setCrmName, setlistName} = counterSlice.actions;
export default counterSlice.reducer;
