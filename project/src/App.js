import React from "react";
import {  Routes, Route } from "react-router-dom";

import Home  from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import List from "./pages/list/List";
// import Single from "./pages/single/Single";
// import New from "./pages/new/New";

function App() {
  return (
  
   <Routes>
    {/* <Route path="/"> */}
   <Route path="/" element={<Home />}/>
   {/* <Route path="login" element={<Login />} />
   <Route path="user">
    <Route index element={<List/>}/>
    <Route path="single" element={<Single/>}/>
    <Route Path="new" element={<New/>}/>
   </Route> */}
    {/* </Route> */}
   </Routes>
  
  );
}

export default App;
