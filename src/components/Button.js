const Button = (props) => {
  const { handleClick } = props;

  return (
    <div>
      <button className="counter-button" onClick={handleClick}>
        Click!
      </button>
    </div>
  );
};

export default Button;
