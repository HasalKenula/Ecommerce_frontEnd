import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import "./Sidebar/Sidebar.css";
import Products from "../pages/products/Products";
import products from "../pages/db/Data";
import Recommended from "../pages/recommended/Recommended";
import Card from "../components/Cards";
import NavigationBar from "./NavigationBar";

type Product = {
  img: string;
  title: string;
  star: string;
  reviews: number;
  prevPrice: string;
  newPrice: string;
  category: string;
  color: string;
  company: string;
};

function ProductFilter() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Radio Filtering -----------
  const handleChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products: any, selected: any) {
    let filteredProducts = products;


    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }: Product) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }: Product) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory);

  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <div className="content">
        <Sidebar handleChange={handleChange} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />
      </div>

    </>
  );
}

export default ProductFilter;
