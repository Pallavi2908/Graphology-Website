import Logo from "../assets/logo.png";
import Button from "./Button.jsx";
import Navigation from "./Navigation.jsx";

const Navbar = () => {
  return (
    <nav className="sticky flex justify-between items-center md:px-5 px-2 pt-3 top-0 bg-black z-10">
      <div>
        <img src={Logo} className="h-14" alt="Logo" />
      </div>

      <div className="hidden md:flex">
        <div className="  md:flex gap-8 items-center text-xl font-Koulen text-textColor ">
          <Navigation />
        </div>
      </div>

      <div className="hidden md:block">
        <Button to="/upload" label="Get Started" />
      </div>
    </nav>
  );
};

export default Navbar;
