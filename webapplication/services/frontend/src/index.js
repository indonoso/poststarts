import React from 'react';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ExploratoryDataAnalysis from "./pages/ExploratoryDataAnalysis";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/exploratory_data_analysis" element={<ExploratoryDataAnalysis />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));