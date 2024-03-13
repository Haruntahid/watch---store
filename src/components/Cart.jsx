import PropTypes from "prop-types";

function Cart({ cart }) {
  //   console.log(product);
  const { name, brand, price } = cart;
  return (
    <>
      <div className="flex justify-between text-center my-5">
        <p className="w-1/3 text-[16px] font-semibold text-start">
          {name.slice(0, 17)}
        </p>
        <p className="w-1/3 text-[16px] font-semibold">{brand}</p>
        <p className="w-1/3 text-[16px] font-semibold">{price}</p>
      </div>
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.object,
};

export default Cart;
