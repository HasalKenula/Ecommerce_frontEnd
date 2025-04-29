import  { useState} from "react";


import Sidebar from "./sidebar/Sidebar";

import "./Sidebar/Sidebar.css";



function ProductFilter() {

  
 

  const [selectedCategory, setSelectedCategory] = useState(null);

 
  // ----------- Radio Filtering -----------
  const handleChange = (event:any) => {
    setSelectedCategory(event.target.value);
  };

  
  return (
    <div className="content">
      <Sidebar handleChange={handleChange} />
    </div>
  );
}

export default ProductFilter;
