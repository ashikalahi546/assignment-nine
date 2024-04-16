import { IoLocationOutline } from "react-icons/io5";
import Rectangle from "/Rectangle 9.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Cart = ({ cart }) => {
  const { image, id, segment_name, description, status, price, estate_title } =
    cart.estate_card;
  console.log(cart.estate_card);
  return (
    <div
      className="bg-[#404040] rounded-[56px]"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="relative">
        <img
          className="h-80 rounded-[56px] w-full relative"
          src={image}
          alt="Rectangle-7"
          border="0"
        />
        <div className="absolute top-0">
          <img className="" src={Rectangle} alt="" />
          <h1 className="-mt-12 ml-14 text-2xl text-white">{status}</h1>
        </div>
      </div>

      <div className="py-7 ml-8 text-white space-y-1.5">
        <h1>{segment_name}</h1>
        <h2 className="text-[#F8FD00] text-xl font-medium">{description}</h2>
        <h3 className="flex items-center gap-0.5">
          <span>
            <IoLocationOutline />
          </span>
          {estate_title}
        </h3>
        <p>${price}</p>
        <Link to={`/cart/${id}`} className="btn btn-outline btn-info">
          <button>View Property</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
