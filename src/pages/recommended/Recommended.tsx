import Button from "../../components/Button2.tsx"
import "./Recommended.css";
type RecommendedProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void; 
  };
const Recommended = ({ handleClick }:RecommendedProps) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex flex flex-wrap gap-3 justify-center md:justify-start">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Watches" title="Watches" />
          <Button onClickHandler={handleClick} value="Headpones" title="Headpones" />
          <Button onClickHandler={handleClick} value="Iphone" title="Iphone" />
          <Button onClickHandler={handleClick} value="Laptops" title="Laptops" />
          <Button onClickHandler={handleClick} value="Playstation" title="Playstation" />
          <Button onClickHandler={handleClick} value="Tablets" title="Tablets" />
        </div>
      </div>
    </>
  );
};

export default Recommended;