import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import icon from "../../assests/icon.png";
import { getData, getFilterData } from "../../Redux/ActionType";
import "./FoodList.css";
export const Food = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store);
  const { filterData } = useSelector((store) => store);

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
  const handleFilter = (e) => {
    const { id, value } = e.target;
    if (id == "filter") {
      dispatch(getFilterData(value));
    }
  };

  return (
    <div className="container">
      <div className="sortDiv">
        <button onClick={() => handleSort()} className="sortingBtn">
          Sorting
        </button>
        <select name="" id="filter" onChange={handleFilter}>
          <option value="">filter by creator</option>
          <option value="javichu">javichu</option>
          <option value="openfoodfacts-contributors">
            openfoodfacts-contributors
          </option>
        </select>
      </div>
      <div className="main_div">
        {data &&
          filterData.map((e) => (
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
