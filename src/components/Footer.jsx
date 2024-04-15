import { FaStar } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid grid-cols-5 gap-5 mt-20 py-10 ">
      <div className="space-y-3 text-white">
        <h2 className="text-2xl font-medium">
          <span className="text-blue-600 ">Dream </span>House
        </h2>
        <p>
          Dream House Real Estate Brokerage is a full-service real estate firm
          based in Canada, specializing in residential, commercial, and
          pre-construction properties.
        </p>

        <div>
          <a href="">Terms</a>
          <a className="ml-3" href="">
            Privacy
          </a>
        </div>
      </div>
      <div className="space-y-3 text-white">
        <h2 className="text-2xl font-medium">Company</h2>
        <ul className="flex flex-col gap-2 text-base">
          <li>Home</li>
          <li>Pricing</li>
          <li>About</li>
        </ul>
      </div>
      <div className="space-y-3 text-white">
        <h2 className="text-2xl font-medium">Connect</h2>
        <ul className="flex flex-col gap-2 text-base">
          <li>Our Community</li>
          <li>Facebook</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="space-y-3 text-white">
        <h2 className="text-2xl font-medium">Contact US</h2>
        <ul className="flex flex-col gap-2 text-base">
          <li>(000) 000-0000</li>
          <li>ashik @ gmail com</li>
          <li>About</li>
        </ul>
      </div>
      <div className="space-y-3 text-white">
        <div className="flex gap-1 text-orange-500">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
        </div>
 <h2>648,237,537 <span className="block"> customer reviews</span> <span className="text-orange-500"> 5 Star</span></h2>
      </div>
    </div>
  );
};

export default Footer;
