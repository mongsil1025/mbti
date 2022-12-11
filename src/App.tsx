import React, { useEffect, useState } from "react";
import { Amplify, API } from "aws-amplify";
import awsExports from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";
import "./App.css";

import {
  addDescriptions,
  descriptions,
} from "./models/predefined_descriptions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { Dictionary } from "./components/Dictionary";

Amplify.configure(awsExports);

function App() {
  // function fetchMbtis() {
  //   API.get("api", "/mbtis", {
  //     headers: {},
  //   })
  //     .then((response) => {
  //       fetchDescriptions(response.Items);
  //     })
  //     .catch((error) => {
  //       console.log("error fetching mbtis", error);
  //     });
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/dictionary/:id" element={<Dictionary />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
