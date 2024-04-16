import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
// // import { ToastContainer, toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [success, setSuccess] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!/@gmail\.com$/.test(email)) {
      setEmailError("Email must be end with @gmail.com");
      return;
    }

    if (password.length < 6) {
      setError("password must be at least 6 character");
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Must have an Uppercase letter in the password");
      return;
    }
    if (!/(?=.*?[a-z])/.test(password)) {
      setError("Must have an lowercase letter in the password");
      return;
    }
    setEmailError("");
    setError("");
    setSuccess('');

    console.log(name, photo, email, password);
    registerUser(email, password)
      .then((result) => {
        setUser(result.user);
        setSuccess('User Created Successfully')
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero mt-0 ">
      <div className="hero-content flex-col w-full">
        <div className="card shrink-0 lg:w-5/12 sm:w-7/12 w-10/12  shadow-2xl bg-base-100">
          <h1 className="sm:text-3xl text-2xl font-bold  mt-5 text-center">
            Register now!
          </h1>
          <form onSubmit={handleRegister} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
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
                {emailError && <p>{emailError}</p>}
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
                    <IoEyeOffOutline />
                  )}
                </span>
              </div>
              <div className="text-red-500 mt-3">{error && <p>{error}</p>}</div>
              <div className="text-green-500 mt-3">{success && <p>{success}</p>}</div>

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mb-4">
            Already Have An Account ?
            <Link to="/login" className="font-medium text-red-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
