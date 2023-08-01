import React from "react";
import Layout from "./Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Tweetspage from "../pages/Tweetspage/Tweetspage";
// import { useDispatch } from "react-redux";
// import { getUsersThunk } from "../redux/users/operations";
// import { useDispatch } from "react-redux";
// import { getUsersThunk } from "../redux/users/operations";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="tweets" element={<Tweetspage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
