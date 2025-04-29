type InputProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    title: string;
    name: string;
    color?: string; // Optional because not all inputs might need a color
  };

const Input = ({ handleChange, value, title, name, color }:InputProps) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default Input;