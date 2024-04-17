import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser,googleLogin } = useContext(AuthContext);
  
  const [error,setError] = useState('');
  const [emailError,setEmailError] = useState('');
  const [success,setSuccess] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    if(!/@gmail\.com$/.test(email)){
      setEmailError('Email must be end with @gmail.com');
      return
    }
    if(password.length < 6){
      setError('password must be at least 6 character');
      return
    }
    setEmailError('')
    setError('')
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        setSuccess('User logged in successfull',result);
      })
      .catch((error) => {
         setError(error.message);
      });
  };
  return (
    <div>
      <div className="hero mt-5 relative ">
        <div className="hero-content flex-col w-full">
          <div className="card shrink-0 lg:w-5/12 sm:w-7/12 w-full  shadow-2xl bg-base-100 pb-6">
            <h1 className="sm:text-3xl text-2xl font-bold mt-5 text-center">
              Login now!
            </h1>
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
                   <div className="text-red-500 mt-2">
              {
                emailError && <p>{emailError}</p>
                }
              </div>
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
              <div className="text-red-500 mt-2">
              {
                  error && <p>{error}</p>
                }
              </div>
              <div className="text-green-500 mt-2">
              {
                success && <p>{success}</p>
                }
              </div>
           
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mb-10">
              Dont’t Have An Account ?
              <Link to="/register" className="font-medium text-red-500">
                {" "}
                Register
              </Link>
            </p>
          </div>
        </div>
        <div className="text-2xl  flex items-center  gap-3 justify-center absolute bottom-9 text-blue-600 ">
          <FaGoogle className="cursor-pointer" onClick={()=> googleLogin()}></FaGoogle>
          <FaFacebook className="cursor-pointer"></FaFacebook>
          <FaGithub className="cursor-pointer"></FaGithub>
        </div>
      </div>
    </div>
  );
};

export default Login;
