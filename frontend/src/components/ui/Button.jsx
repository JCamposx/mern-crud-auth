export const Button = ({ type, onClick, children }) => {
  return (
    <button
      className={`${type} px-4 py-1 rounded-md w-20 text-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
