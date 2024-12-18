export default function Portfolio() {
  return (
    <div id="portfolio" className="section">
      <div className="container mx-auto max-w-[1200px] px-3 pt-3 pb-20">
        <div
          className="flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos="fade-down"
        >
          <div className="order-2 lg:order-1 mt-5">
            <h4 className="text-secondary font-secondary text-3xl">
              Recent Work
            </h4>
            <div className="text-gradient font-primary max-w-[700px] mx-auto text-xl">
              projects that I have created and worked on so far
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center">
            <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-5xl">
              04
            </h2>
            <div className="font-primary mt-2">Completed Projects</div>
          </div>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="images/portfolio1.png" alt="" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition ">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h4 className="text-gradient">
                      Exceed | Guitar E-Commerce
                    </h4>
                  </div>
                  <p>
                    Made with HTML, PHP, JavaScript & jQuery and Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="images/portfolio2.png" alt="" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition ">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h4 className="text-gradient">StoveGuard</h4>
                  </div>
                  <p>
                    Made With HTML, PHP, JavaScript & jQuery and Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="images/portfolio3.png" alt="" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition ">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h4 className="text-gradient">RSUD</h4>
                  </div>
                  <p>Made With HTML, Python, Django and Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="images/portfolio4.png" alt="" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition ">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h4 className="text-gradient">SKALA</h4>
                  </div>
                  <p>Made With HTML, PHP, JavaScript & jQuery, Laravel and Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
