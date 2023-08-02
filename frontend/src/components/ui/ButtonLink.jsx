import { Link } from "react-router-dom";

export const ButtonLink = ({ type, to, children }) => {
  return (
    <Link className={`${type} px-4 py-1 rounded-md w-20 text-center`} to={to}>
      {children}
    </Link>
  );
};
