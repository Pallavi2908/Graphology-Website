import { Link } from "react-router-dom";

const Button = ({ to, label }) => {
  return (
    <>
      <Link to={to}>
        <button className=" hidden md:block p-3 px-4  text-xl font-Koulen bg-SecondaryBG text-textColor rounded-full baseline hover:bg-textColor hover:text-SecondaryBG transition duration-300">
          {label}
        </button>
      </Link>
    </>
  );
};

export default Button;
