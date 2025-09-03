const Input = ({ className, disabled, error, ...rest }) => {
  return (
    <div>
      <input
        style={{ opacity: disabled ? 0.5 : 1 }}
        disabled={disabled}
        className={`bg-gray-50 border  text-gray-900 text-sm rounded-sm outline-none block w-full p-2.5 ${
          error ? "border-red-400" : "border-gray-300"
        } ${className}`}
        {...rest}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
