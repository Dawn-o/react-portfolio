import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0">
      <div className="flex justify-between py-5 items-center">
        <div
          className="text-gradient font-secondary"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <a href="/">
            <h1 className="text-[30px] leading-none font-bold">
              MUHAMMAD RUSHELASLI
            </h1>
            <h4 className="font-normal leading-none">SOFTWARE ENGINEERING</h4>
          </a>
        </div>
        <div
          className="flex items-center space-x-3"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <nav
            className="flex items-center gap-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <a
              href="https://github.com/yourusername"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <BsGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <BsLinkedin size={22} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="social-link"
              title="Email"
            >
              <BsEnvelopeFill size={22} />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
