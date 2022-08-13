import { useNavigate } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <h2 onClick={() => navigate("/")}>TheFoodList</h2>
      <h2 onClick={() => navigate("/favourite")}>Favourite</h2>

      
    </div>
  );
};
