import { getAuth, signOut } from "firebase/auth";
const Header = () => {
  const auth = getAuth();
  return (
    <div className="navbar bg-base-100 mb-8">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl">WhenWeWork</a>
      </div>
      <a onClick={() => signOut(auth)} className="btn btn-secondary">
        {" "}
        Sign Out
      </a>
    </div>
  );
};

export default Header;
