import React from "react";

import styles from "./App.module.css";
import Preloader from "../components/preloader/Preloader";
import ClosePreloader from "./../hooks/closePreloader";

function App() {
     const { isPreloaderOn } = ClosePreloader();

     return (
          <div className={styles.App} id="App">
               {isPreloaderOn ? <Preloader /> : null}
               <div className={styles.header}>sssss</div>
          </div>
     );
}

export default App;
