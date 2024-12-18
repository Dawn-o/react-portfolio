import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-3 items-center"
    >
      <div className="w-full" data-aos='zoom-in'>
        <div className="block text-center font-secondary font-black text-[30px]">
          Hello, I am
          <div>
            <TypeAnimation
              sequence={[
                "Telkom Schools Student",
                3000,
                "Backend Developer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="ml-3 text-secondary"
            />
          </div>
        </div>
        <div className="max-w-[750px] mx-10 lg:mx-auto mt-5 text-justify">
          I am an 11th-grade student at Telkom Schools Banjarbaru Vocational
          School, majoring in Software Engineering. I have a great interest in
          Back End Development and want to continue to deepen my knowledge in
          this field. Additionally, I am a generalist team leader who strives to
          build closeness among my members.
        </div>
      </div>
    </div>
  );
}
