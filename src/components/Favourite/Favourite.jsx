import { useEffect } from "react";
import { useState } from "react";
import "./Favourite.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import icon from "../../assests/icon.png";
import { getFavourite } from "../../Redux/ActionType";
export const Favourite = () => {
  const [favData, setFavData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { favourite } = useSelector((store) => store);

  const getFavouriteData = () => {
    setFavData([...favourite]);
  };
  useEffect(() => {
    getFavouriteData();
  }, []);

  const handleSort = () => {
    let sorting = favData.sort((a, b) =>
      a.product_name.localeCompare(b.product_name)
    );
    dispatch(getFavourite([...sorting]));
  };
  return (
    <>
      {favourite.length > 0 ? (
        <div className="container">
          <div className="sortDiv">
            <button onClick={() => handleSort()} className="sortingBtn">
              Sorting
            </button>
          </div>
          <div className="main_div">
            { favData.map((e) => (
              <div onClick={() => navigate(`favourite/${e.code}`)} key={e.code}>
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
      ) : (
        <div className="emptyDiv">
          <img
            src="https://c.tenor.com/unvXyxtdn3oAAAAC/no-result.gif"
            alt="sorry! No result found"
            className="notFoundImg"
          />
        </div>
      )}
    </>
  );
};
