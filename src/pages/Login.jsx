import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Login = () => {

  const [showPassword,setShowPassword] = useState(false)
    return (
        <div className="hero ">
        <div className="hero-content flex-col w-full">
          <div className="text-center ">
            <h1 className="text-4xl font-bold mt-10">Login now!</h1>
        
          </div>
          <div className="card shrink-0 w-5/12  shadow-2xl bg-base-100">
            <form className="card-body ">
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
               <div className="w-full relative">
               <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered w-full" required />
               <span className="absolute top-4 right-3" onClick={()=> setShowPassword(!showPassword)}>
 {
  showPassword ? <IoEyeOutline></IoEyeOutline> :  <IoEyeOffOutline></IoEyeOffOutline> 
 }
               </span>
               </div>
        
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mb-4">Dont’t Have An Account ?<Link to='/register' className="font-medium text-red-500"> Register</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;