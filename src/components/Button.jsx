const Button = ({ onClick, value = 'submit', isViewMode }) => {
  return (
    <div>
      <button onClick={onClick} disabled={isViewMode}>
        {value}
      </button>
    </div>
  );
};

export default Button;
