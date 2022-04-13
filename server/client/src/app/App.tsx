import React, { useEffect } from "react";

import styles from "./App.module.css";
import Preloader from "../components/preloader/Preloader";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { preloaderSlice } from "../store/reducers/preloaderSlice";
import { useScrollLock } from "../hooks/scrollLock";

function App() {
     const dispatch = useAppDispatch();
     const { unlockScroll } = useScrollLock();

     const closePreloader = () => {
          dispatch(preloaderSlice.actions.closePreloader());
          localStorage.setItem("showPreloader", "false");
     };
     const isPreloaderOn = useAppSelector((state) => state.preloaderReducer.isOn);
     useEffect(() => {
          const showPreloader = localStorage.getItem("showPreloader");
          if (showPreloader === "false") {
               unlockScroll();
               return closePreloader();
          }
     });

     return (
          <div className={styles.App} id="App">
               {isPreloaderOn ? <Preloader /> : null}
               <div className={styles.header}></div>
          </div>
     );
}

export default App;
