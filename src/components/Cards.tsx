
import { BsFillBagFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
type CardProps = {
    img: string; 
    title: string; 
    star: string; 
    reviews: number; 
    prevPrice: string; 
    newPrice: string; // New price (string, for currency formatting like "$80")
  };

const Card = ({ img, title, star, reviews, prevPrice, newPrice }:CardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAdd = () => {
    addToCart({ name: title, price: newPrice ,img:img});
  };
  


  return (
    <>
      <section className="card flex flex-col items-center justify-center ">
        <img src={img} alt={title} className="card-img " />
        <div className="card-details">
          <h3 className="text-center card-title">{title}</h3>
          <section className="card-reviews flex justify-center items-center gap-2">
            {star} {star} {star} {star}
            <span className="total-reviews ">{reviews}</span>
          </section>
          <section className="flex flex-col gap-3 card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
            <div>
            <button className="flex flex-col gap-3" onClick={handleAdd}>Add to Cart</button>
            <button className="flex flex-col gap-3" onClick={() => navigate("/product")}>Go to Cart</button>
            </div>
          </section>
        </div>
      </section>
    

    </>
  );
};

export default Card;