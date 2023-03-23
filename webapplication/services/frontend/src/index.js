import React from 'react';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NoPage from "./pages/NoPage";
import ExploratoryDataAnalysis from "./pages/ExploratoryDataAnalysis";
import GeoSpatialAnalysis from "./pages/GeoSpatialAnalysis";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/exploratory_analysis" element={<ExploratoryDataAnalysis />} />
          <Route path="/geo_data" element={<GeoSpatialAnalysis />} />
          <Route path="/search" element={<Search />} />
          {/*<Route path="*" element={<NoPage />} />*/}
        </Route>
      </Routes>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));