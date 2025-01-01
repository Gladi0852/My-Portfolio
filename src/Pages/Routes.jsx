import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import Routes as well
import App from "../App";
import HomePage from "../Pages/HomePage";
import AllProjects from "../Component/AllProjects";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Child route */}
          <Route index element={<HomePage />} />
          {/* 'index' is used for the default child route */}
          <Route path="/projects" element={<AllProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
