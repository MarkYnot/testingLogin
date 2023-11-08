import React, { useState, Suspense } from "react";
import { Amplify } from "aws-amplify";
import config from "./utils/aws-exports";
import axios from "axios";
import "./App.css";
import Login from "./pages/login";
import Admin from "./pages/adminAddUser";
import Passowrd from "./pages/changePassowrd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  Amplify.configure(config);

  const routes = [
    {
      path: "/login",
      exact: true,
      main: () => <Login />,
    },

    {
      path: "/",
      exact: true,
      main: () => <Admin />,
    },

    {
      path: "/changePassword",
      exact: true,
      main: () => <Passowrd />,
    },
  ];

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.main />}
              />
            ))}
          </Routes>
        </>
      </Suspense>
    </Router>
  );
}

export default App;
