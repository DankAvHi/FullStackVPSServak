import { useEffect } from "react";
import { preloaderSlice } from "../store/reducers/preloaderSlice";
import { useAppDispatch, useAppSelector } from "./redux";
import { useScrollLock } from "./scrollLock";

const ClosePreloader = () => {
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

     return { isPreloaderOn };
};

export default ClosePreloader;
