import { BsArrowDown } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-[1200px] px-4 relative">
        <div
          className="flex flex-col items-center justify-center text-center"
          data-aos="zoom-in"
        >
          <div className="font-secondary font-black text-[30px] mb-4">
            Hello, I am
            <div>
              <TypeAnimation
                sequence={[
                  "Telkom Schools Student",
                  2000,
                  "Backend Developer",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="ml-3 text-secondary"
              />
            </div>
          </div>

          <div className="max-w-[750px] px-4 sm:px-6 mt-5 text-center sm:text-justify font-primary text-lg">
            I am an 11th-grade student at Telkom Schools Banjarbaru Vocational
            School, majoring in Software Engineering. I have a great interest in
            Back End Development and want to continue to deepen my knowledge in
            this field. Additionally, I am a generalist team leader who strives
            to build closeness among my members.
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <BsArrowDown size={24} />
      </div>
    </section>
  );
}
