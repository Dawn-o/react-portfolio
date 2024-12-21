import { Github, Linkedin, Mail } from "lucide-react";

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
              href="https://github.com/dawn-o"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-rushelasli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:ruselaq@gmail.com"
              className="text-gray-800 hover:text-gray-900 transition-colors"
            >
              <Mail size={22} />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
