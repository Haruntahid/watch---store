import PropTypes from "prop-types";

function Product({ product, handelCart }) {
  const { name, img, brand, price } = product;
  return (
    <div className="bg-gray-300 rounded-2xl mb-5 p-5">
      <img className="w-full h-80 object-cover rounded-2xl" src={img} alt="" />
      <h1 className="text-2xl mt-4">
        Name : <span className="text-blue-600 font-semibold">{name}</span>
      </h1>
      <h1 className="text-2xl">
        Brand : <span className="text-blue-600 font-semibold">{brand}</span>
      </h1>
      <p className="text-2xl">
        Price : <span className="text-blue-600 font-semibold">{price}$</span>
      </p>
      <button
        onClick={() => handelCart(product)}
        className="mt-5 px-5 py-2 bg-purple-600 rounded-2xl text-white"
      >
        Add To Cart
      </button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
  handelCart: PropTypes.func,
};

export default Product;
