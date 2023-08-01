import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.user.data);

  return (
    <div className="flex flex-col items-center justify-center h-screen cursor-default">
      <h1 className="text-3xl">
        Welcome,{" "}
        <span className="font-bold text-blue-500">{user.username}</span>
      </h1>

      <h2 className="pt-2">
        Click{" "}
        <Link to={"/tasks"} className="text-purple-500 font-bold">
          here
        </Link>{" "}
        to check your tasks
      </h2>
    </div>
  );
};

export default Home;
