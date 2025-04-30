import Input from "../../../components/Input";
import "./Prices.css";

type Props = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    
   
  };

const Price = ({ handleChange }:Props) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>


        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - $150"
          name="test2"
     
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
      
        />
      </div>
    </>
  );
};

export default Price;