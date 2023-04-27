import React, { useState } from "react";
import Routing from "./Routes/Routing";
import AuthRoute from "./Routes/AuthRoute"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import Store from './Store/Store'
function App() {
  return (
    <>
      {/* <Routing/> */}
      <Provider store={Store
      }>

        <AuthRoute />
      </Provider>
    </>
  )
}
export default App;
