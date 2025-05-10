import Category from "./categories/Categories";
import Colors from "./colors/Colors";
import Price from "./prices/Prices";
import "./Sidebar.css";

type Props = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };

const Sidebar = ({ handleChange }:Props) => {
  return (
    <>
      <div className="sidebar">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </div>
    </>
  );
};

export default Sidebar;