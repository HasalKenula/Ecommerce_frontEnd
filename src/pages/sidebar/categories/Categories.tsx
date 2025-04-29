import "./Categories.css";
import Input from "../../../components/Input";

type props={
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    
}

function Category({ handleChange }:props) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="laptops"
          title="Laptops"
          name="test"
          
        />
        <Input
          handleChange={handleChange}
          value="watches"
          title="Watches"
          name="test"
         
        />
        <Input
          handleChange={handleChange}
          value="headpones"
          title="Headpones"
          name="test"
        
        />
        <Input
          handleChange={handleChange}
          value="playstation"
          title="Playstation"
          name="test"
         
        />

        <Input
          handleChange={handleChange}
          value="tablets"
          title="Tablets"
          name="test"
         
        />

        <Input
          handleChange={handleChange}
          value="iphone"
          title="Iphone"
          name="test"
         
        />
      </div>
    </div>
  );
}

export default Category;