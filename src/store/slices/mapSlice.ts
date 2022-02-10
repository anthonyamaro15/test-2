import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SatateTypes {
   mapLoaded: boolean;
}
const initialState: SatateTypes = {
   mapLoaded: false,
};
export const mapSlice = createSlice({
   name: "mapSlice",
   initialState,
   reducers: {
      setMapLoaded: (state, action: PayloadAction<boolean>) => {
         state.mapLoaded = action.payload;
      },
   },
});

export const { setMapLoaded } = mapSlice.actions;

export const mapLoadedSelector = (state: RootState) => state.mapSlice.mapLoaded;

export default mapSlice.reducer;
