import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import icon from "../../assests/icon.png";
import { getData } from "../../Redux/ActionType";
import "./FoodList.css";
export const Food = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store);

  useEffect(() => {
    getFoodData();
  }, []);

  const getFoodData = async () => {
    const response = await fetch("./OFF_subset17.json");
    const data = await response.json();
    dispatch(getData([...data]));
  };
  const handleSort = () => {
    let sorting = data.sort((a, b) =>
      a.product_name.localeCompare(b.product_name)
    );
    dispatch(getData([...sorting]));
  };

  return (
    <div className="container">
      <div className="sortDiv">
        <button onClick={() => handleSort()} className="sortingBtn">
          Sorting
        </button>
      </div>
      <div className="main_div">
        {data.map((e) => (
          <div onClick={() => navigate(`food/${e.code}`)} key={e.code}>
            <div>
              <img src={icon} alt="icon" />
            </div>
            <div className="name_div">
              <span>
                <b>{e.product_name}</b>{" "}
              </span>
              <span>({e.generic_name})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
