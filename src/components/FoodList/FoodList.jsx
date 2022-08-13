import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import icon from "../../assests/icon.png"
import "./FoodList.css"
export const Food =()=>{
   const [item,setItem] =useState([])
   const navigate =useNavigate()
   useEffect(()=>{
       axios.get("https://alokkumar-dev.github.io/json-repo/OFF_subset17.json").then((res)=>{
        console.log(res.data)
        setItem(res.data)
       })
   },[])
    return (
        <div className="main_div">
            <div className="sortDiv">
                <button>Sorting</button>
            </div>
            {
                item.map((e)=>(
                    <div onClick={()=>navigate(`food/${e.code}`)} key={e.code}>
                        <div>

                        <img src={icon} alt="icon" />
                        </div>
                        <div className="name_div"><span><b>{e.product_name}</b> </span><span>({e.generic_name})</span></div>
                        
                    </div>
                ))
            }
        </div>
    )
}