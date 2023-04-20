import React from "react";
import ReactDOM from "react-dom";
// import {FavProg, myName, myNames} from "./App";
import * as allda from "./App"




ReactDOM.render(

      <>
      <ol>
          <li>Abhijdkw </li>
          <li>{ allda.FavProg}</li>
          <li>{ allda.myName()}</li>
          <li>{ allda.myNames()}</li>
      </ol>
      </>
      
      
      ,document.getElementById("root")
);