import { useEffect, useState } from "react";
import { useCart} from "../components/CartContext";
import "./ArtCard.css";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const ProductPage = () => {
  const {isAuthenticated,jwtToken}=useAuth();
  const { cart,removeFromCart } = useCart();
  const[totalPrice,setTotalPrice]=useState<number>();

  const config={
    headers: {
        Authorization: `Bearer ${jwtToken}`
    }
  }

  async function addPayement() {
    await axios.post("http://localhost:8081/orders",{
      totalPrice:totalPrice
      
    },config);
    navigate("/orders");
  }

  const navigate = useNavigate();


  // const getTotal = () => {
  //   return cart.reduce((sum, item) => {
  //     const price = parseFloat(item.price.replace("$", ""));
  //     return sum + price;
  //   }, 0).toFixed(2);
  // };

  useEffect(() => {
    const total = cart.reduce((sum, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return sum + price;
    }, 0);
    setTotalPrice(parseFloat(total.toFixed(2)));
  }, [cart,isAuthenticated]);

  return (
    <div className="cart-container ">
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
              <th>Action</th> {/* New column */}
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
                  <button onClick={() => removeFromCart(index)}>Delete</button>
                </td>
              </tr>
            ))}
            <tr className="total-row">
              <td colSpan={3}>Total</td>
              <td>
                  <button onClick={() => addPayement()}>Payement</button>
              </td>
              {/* <td>${getTotal()}</td> */}
              <td>${totalPrice?.toFixed(2) ?? "0.00"}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductPage;
