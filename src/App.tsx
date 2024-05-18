import React, { Suspense, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import CommonLoader from "./common/CommonLoader/CommonLoader";
import { DeveloperDataContext } from "./utils/appContext";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";

function App() {
  const [appData, setAppData] = useState([]);

  return (
    <DeveloperDataContext.Provider value={{ appData, setAppData }}>
      <Navbar />
      <Layout>
        <Suspense fallback={<CommonLoader />}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/description" element={<Dashboard />} />
            </Routes>
          </Router>
        </Suspense>
      </Layout>
    </DeveloperDataContext.Provider>
  );
}

export default App;
