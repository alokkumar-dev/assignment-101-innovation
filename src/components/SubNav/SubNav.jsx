import "./SubNav.css";
import { useNavigate } from "react-router-dom";
export const SubNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="subNavCont">
        <button className="listBtn" onClick={() => navigate("/")}>
          Food List
        </button>
        <hr />
        <button className="favBtn" onClick={() => navigate("/favourite")}>
          Favouraite
        </button>
      </div>
    </>
  );
};
