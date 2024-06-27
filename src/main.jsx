import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/screens/Home.jsx";
import Layout from "./components/layout/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);
