import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import icon from "../../assests/icon.png";
import "./FoodListDetails.css";
import { Food } from "../FoodList/FoodList";
import { getFavourite } from "../../Redux/ActionType";
export const FoodDetails = () => {
  const [item, setItem] = useState({});
  const { data } = useSelector((store) => store);
  const { code } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getDetailsData = () => {
    let ans = data.filter((e) => e.code == code);
    console.log("ans", ans);
    setItem(ans[0]);
  };
  const addFavourite = (e) => {
    dispatch(getFavourite(item));
    alert("added successfully");
  };
  useEffect(() => {
    getDetailsData();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <div className="upper_div">
          <button onClick={(e) => addFavourite(e)} className="addFavBtn">
            Add Favourite
          </button>
          <div>
            <div>
              <img src={icon} alt="icon" />
            </div>
            <div className="name_div">
              <span>
                <b>{item.product_name}</b>{" "}
              </span>
              <span>{item.generic_name}</span>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>URL</td>
                <td>
                  <a href={item.url}>link</a>
                </td>
              </tr>
              <tr>
                <td>Container</td>
                <td>{item.packaging}</td>
              </tr>
              <tr>
                <td>Serving_size</td>
                <td>{item.serving_size}</td>
              </tr>
              <tr>
                <td>Energy_100g</td>
                <td>{item.energy_100g}</td>
              </tr>
              <tr>
                <td>Omega_3_fat_100g</td>
                <td>{item.omega_3_fat_100g}</td>
              </tr>
              <tr>
                <td>Fat_100g</td>
                <td>{item.fat_100g}</td>
              </tr>
              <tr>
                <td>Fiber_100g</td>
                <td>{item.fiber_100g}</td>
              </tr>
              <tr>
                <td>Cholesterol_100g</td>
                <td>{item.cholesterol_100g}</td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>{item.quantity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
};
