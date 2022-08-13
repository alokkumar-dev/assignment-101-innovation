import { Route, Routes } from "react-router-dom";
import { Favourite } from "../Favourite/Favourite";
import { Food } from "../FoodList/FoodList";
import { FoodDetails } from "../FoodListDetails/FoodListDetails";
import { Navbar } from "../Navbar/Navbar";
import { SubNav } from "../SubNav/SubNav";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <SubNav />
      <Routes>
        <Route path="/" element={<Food />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/favourite/favourite/:code" element={<FoodDetails />} />
        <Route path="/food/:code" element={<FoodDetails />} />
      </Routes>
    </>
  );
};
