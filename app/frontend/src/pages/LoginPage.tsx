import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [authorising, setAuthorising] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const signInWithGoogle = async () => {
    setAuthorising(true);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/roster");
      })
      .catch((error) => {
        console.log(error);
        setAuthorising(false);
      });
  };

  return (
    <div className="grid h-screen bg-base-200 place-items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div className="card-actions justify-end">
            <button
              onClick={() => signInWithGoogle()}
              className={`btn btn-primary ${
                authorising ? "bg-red-100" : "bg-pink-200"
              }`}
            >
              Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
