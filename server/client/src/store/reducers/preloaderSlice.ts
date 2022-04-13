import { createSlice } from "@reduxjs/toolkit";
import { IPreloader } from "../../interfaces/Preloader/IPreloader";

interface PreloaderState {
     isOn: IPreloader["isOn"];
}

const initialState: PreloaderState = {
     isOn: true,
};

export const preloaderSlice = createSlice({
     name: "preloader",
     initialState,
     reducers: {
          closePreloader: (state) => {
               state.isOn = false;
          },
     },
});

export default preloaderSlice.reducer;
