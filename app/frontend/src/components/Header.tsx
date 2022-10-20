import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/AuthSlice";
import { AppDispatch } from "../app/store";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  //const auth = getAuth();
  return (
    <div className="navbar bg-base-100 mb-8">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl">WhenWeWork</a>
      </div>
      <a onClick={() => onLogout()} className="btn btn-secondary">
        {" "}
        Sign Out
      </a>
    </div>
  );
};

export default Header;
