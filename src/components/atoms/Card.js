const Card = ({ children, className }) => {
  return (
    <div
      className={`p-6 bg-blue-100 border border-gray-200 shadow ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
