import { Link } from "react-scroll";
import { BiHomeAlt, BiUser, BiCodeAlt } from "react-icons/bi";

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
          to="home"
          activeClass="active"
          offset={100}
          smooth={true}
          spy={true}
        >
          <BiHomeAlt />
        </Link>
        <Link
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          to="profile"
          activeClass="active"
          offset={100}
          smooth={true}
          spy={true}
        >
          <BiUser />
        </Link>
        <Link
          className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
          to="portfolio"
          activeClass="active"
          offset={100}
          smooth={true}
          spy={true}
        >
          <BiCodeAlt />
        </Link>
      </div>
    </div>
  );
}
