import { Route, Routes } from "react-router-dom"
import { Food } from "../FoodList/FoodList"
import { FoodDetails } from "../FoodListDetails/FoodListDetails"
import { Navbar } from "../Navbar/Navbar"

export const AllRoutes = ()=>{
    return(
        <>
        <Navbar />
        <Routes>
        <Route path="/" element={<Food /> } />
        <Route path="/food/:code" element={<FoodDetails /> } />
        </Routes>
        </>
    )
}