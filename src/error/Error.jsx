import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center text-center text-2xl">
         <h2>   Not found page</h2>
         <Link to='/'><button className="btn mt-3">go back</button></Link>
        </div>
    );
};

export default Error;