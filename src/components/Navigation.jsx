import { Link } from "react-router-dom";

const navLinks = [
  { id: 1, to: "/", label: "Home" },
  { id: 2, to: "/working", label: "How it Works" },
  { id: 3, to: "/upload", label: "Upload" },
  { id: 4, to: "/about-us", label: "About Us" },
];

function Navigation() {
  return (
    <>
      {navLinks.map((elem) => {
        return (
          <Link
            key={elem.id}
            to={elem.to}
            className="group text-textColor transition duration-300 hover:text-SecondaryBG"
          >
            {elem.label} {/* Render link label */}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-SecondaryBG"></span>
          </Link>
        );
      })}
    </>
  );
}

export default Navigation;
