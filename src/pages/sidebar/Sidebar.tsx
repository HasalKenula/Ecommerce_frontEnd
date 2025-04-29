import Category from "./categories/Categories";

import "./Sidebar.css";

type Props = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };

const Sidebar = ({ handleChange }:Props) => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-container">
          {/* <h1>--</h1> */}
        </div>
        <Category handleChange={handleChange} />
        
      </div>
    </>
  );
};

export default Sidebar;