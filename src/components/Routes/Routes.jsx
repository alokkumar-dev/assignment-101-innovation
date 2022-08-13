import { Route, Routes } from "react-router-dom"
import { Favourite } from "../Favourite/Favourite"
import { Food } from "../FoodList/FoodList"
import { FoodDetails } from "../FoodListDetails/FoodListDetails"
import { Navbar } from "../Navbar/Navbar"

export const AllRoutes = ()=>{
    return(
        <>
        <Navbar />
        <Routes>
        <Route path="/" element={<Food /> } />
        <Route path="/Favourite" element={<Favourite /> } />
        <Route path="/food/:code" element={<FoodDetails /> } />
        </Routes>
        </>
    )
}