type ButtonProps = {
    onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void; // updated to match the event type
    value: string;
    title: string;
  };

const Button = ({ onClickHandler, value, title }:ButtonProps) => {
    return (
      <button onClick={onClickHandler} value={value} className="m-2 px-5 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
        {title}
      </button>
    );
  };
  
  export default Button;