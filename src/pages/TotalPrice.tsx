import { useEffect, useState } from "react";
import { useCart } from "../components/CartContext";
import "./ArtCard.css";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const ProductPage = () => {
  const { isAuthenticated, jwtToken } = useAuth();
  const { cart, removeFromCart } = useCart();
  const [totalPrice, setTotalPrice] = useState<number>();

  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  }

  async function addPayement() {
    await axios.post("http://localhost:8081/orders", {
      totalPrice: totalPrice

    }, config);
    alert("Your payment is successful");
    navigate("/");
  }

  const navigate = useNavigate();


  useEffect(() => {
    const total = cart.reduce((sum, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return sum + price;
    }, 0);
    setTotalPrice(parseFloat(total.toFixed(2)));
  }, [cart, isAuthenticated]);

  return (
    <div className="cart-container ">
      <div className=" text-2xl font-bold text-center">Your Cart</div>

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
              <th>Action</th>
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
                <td>
                  <button onClick={() => removeFromCart(index)} className="m-2 px-5 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Delete</button>
                </td>
              </tr>
            ))}
            <tr className="total-row">
              <td colSpan={3}>Total</td>
              <td>
                <button onClick={() => addPayement()} className="m-2 px-5 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Payement</button>
              </td>
              <td>${totalPrice?.toFixed(2) ?? "0.00"}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductPage;
