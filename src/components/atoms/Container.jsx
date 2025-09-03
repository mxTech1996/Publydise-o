const Container = ({ children, className, ...rest }) => (
  <div
    className={`container mx-auto w-full px-4 xl:px-0 ${className}`}
    {...rest}
  >
    {children}
  </div>
);
export default Container;

