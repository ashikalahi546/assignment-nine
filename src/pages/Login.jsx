import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {loginUser} = useContext(AuthContext)
  const handleLogin = e => {
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.password.value;
  console.log(email,password)
  loginUser(email,password)  
  .then(result => {
    console.log(result.user)
}).catch(error => {
    console.error(error.message)
})
}
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col w-full">

        <div className="card shrink-0 lg:w-5/12 sm:w-7/12 w-full  shadow-2xl bg-base-100">
        <h1 className="sm:text-3xl text-2xl font-bold mt-5 text-center">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="w-full relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  className="absolute top-4 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <IoEyeOutline></IoEyeOutline>
                  ) : (
                    <IoEyeOffOutline></IoEyeOffOutline>
                  )}
                </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center mb-4">
            Dont’t Have An Account ?
            <Link to="/register" className="font-medium text-red-500">
              {" "}
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
