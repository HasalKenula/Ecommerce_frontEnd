import { useCart } from "../components/CartContext";
import "./ArtCard.css";

const ProductPage = () => {
  const { cart } = useCart();

  const getTotal = () => {
    return cart.reduce((sum, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return sum + price;
    }, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.img} alt={item.name} className="product-img" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
            <tr className="total-row">
              <td colSpan={3}>Total</td>
              <td>${getTotal()}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductPage;
