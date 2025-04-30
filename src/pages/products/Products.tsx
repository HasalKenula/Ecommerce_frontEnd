import "./Products.css";
type ProductsProps = {
    result: React.ReactNode[]; // Array of React nodes (JSX elements)
  };
const Products = ({ result }:ProductsProps) => {
  return (
    <>
      <section className="card-container">{result}</section>
      
    </>
  );
};

export default Products;