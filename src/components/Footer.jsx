import Navigation from "./Navigation.jsx";

const Footer = () => {
  return (
    <footer className=" bg-black bottom-0  w-full">
      <hr />
      <div className="container mx-auto flex gap-16 justify-center items-baseline md:p-4 py-2 text-textColor font-Outfit text-base mb-2">
        <Navigation />
      </div>
      <p className="text-center font-Outfit text-base text-textColor">
        © PsyFer . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
