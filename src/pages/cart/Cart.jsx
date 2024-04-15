import Rectangle from "/Rectangle 9.png";

const Cart = ({ cart }) => {
  const { image, id, segment_name, Residential, description } =
    cart.estate_card;
  console.log(cart.estate_card);
  return (
    <div>
      <div>
        {/* <img className='h-96 w-full' src={image} alt="dskdsj" />
         */}
        <div className="relative">
          <img
            className="h-80 rounded-[56px] w-full relative"
            src={image}
            alt="Rectangle-7"
            border="0"
          />
          <img className="absolute top-0" src={Rectangle} alt="" />
        </div>

        <h1>{segment_name}</h1>
        <h1>{Residential}</h1>
        <h1>{description}</h1>
      </div>
    </div>
  );
};

export default Cart;
