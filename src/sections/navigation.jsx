import { Link } from "react-scroll";
import { Home, User, Code } from "lucide-react";

export default function Navigation() {
  return (
    <div
      className="fixed bottom-4 left-0 right-0 text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5"
      data-aos-easing="linear"
      data-aos-duration="400"
      data-aos="fade-up"
    >
      <div className="flex justify-between mx-auto bg-white text-secondary p-2 rounded-full border-secondary border-solid border-[1px] max-w-[200px] lg:flex-col">
        <Link
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          to="hero"
          activeClass="active"
          offset={100}
          smooth={true}
          spy={true}
        >
          <Home size={18} />
        </Link>
        <Link
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          to="skills"
          activeClass="active"
          offset={100}
          smooth={true}
          spy={true}
        >
          <User size={18} />
        </Link>
        <Link
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          to="projects"
          activeClass="active"
          offset={100}
          smooth={true}
          spy={true}
        >
          <Code size={18} />
        </Link>
      </div>
    </div>
  );
}