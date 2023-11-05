import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { HiMiniEyeSlash, HiMiniEye } from "react-icons/hi2";
import { useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signInGoogle, signInEmailPass } = UseAuth();
  const [error, setError] = useState(null);
  const [isShow, setIsShow] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();

    setError(" ");

    signInEmailPass(email, password)
      .then((res) => {
        navigate(location?.state ? location.state : "/");
        console.log(res.user)
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const googleSignIn = () => {
    signInGoogle()
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>FeedX | Log in</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="text-center">
          <div className="my-10">
            <p className="text-4xl font-bold text-sky-700 text-center">FeedX</p>
            <p className="">
              A Community Food Sharing and Surplus Reduction Platform
            </p>
          </div>
          <div className=" w-full pb-4 shadow-2xl lg:w-96">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={isShow ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setIsShow(!isShow)}
                  className="absolute right-3 top-14"
                >
                  {!isShow ? (
                    <HiMiniEye></HiMiniEye>
                  ) : (
                    <HiMiniEyeSlash></HiMiniEyeSlash>
                  )}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="p-3 rounded-lg bg-sky-700 text-white">
                  Log in
                </button>
              </div>
              <div className="text-center">
                <p className="text-sm text-center">
                  Dont have account?{" "}
                  <Link to="/register" className="text-blue-400">
                    Register now
                  </Link>{" "}
                </p>
              </div>
            </form>
            <div className="text-center">
              <p className="text-xl font-semibold">Log in with</p>
              <button onClick={googleSignIn}>
                {" "}
                <FcGoogle className="text-2xl"></FcGoogle>{" "}
              </button>
            </div>
          </div>
          <div className="mt-10">
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
