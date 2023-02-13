import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import CategoryChoice from "../pages/CategoryChoice/CategoryChoice";
import SignUp from "../pages/SignUp/SignUp";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/SignUp" element={<SignUp />} />
      <Route exact path="/CategoryChoice" element={<CategoryChoice />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
