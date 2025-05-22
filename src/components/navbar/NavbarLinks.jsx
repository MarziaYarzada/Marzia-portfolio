import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experiance" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];
const NavbarLinks = () => {
  return (
    <ul className="flex gap-6 py-4 font-bold text-center text-white lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl  sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full ">
      {links.map((link, index) => {
        return (
          <li className="group" key={index}>
            <Link
              to={link.section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="text-white transition-all duration-500 cursor-pointer hover:text-cyan"
            >
              {link.link}
            </Link>
            <div className="w-0 mx-auto bg-cyan group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
