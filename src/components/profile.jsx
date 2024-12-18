export default function Profile() {
  return (
    <div id="profile" className="section" data-aos="room-in">
      <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
        <div
          className="font-secondary text-center font-bold mb-12"
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos="fade-right"
        >
          <h4 className="text-secondary mb-3 text-3xl">Programming Language Skills</h4>
          <h2 className="text-gradient font-primary max-w-[700px] mx-10 lg:mx-auto text-xl text-center lg:text-justify">
            I have a great interest in Back End Development so I studied quite a
            lot of programming languages for the back end but I also learned a
            little design for the front end
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* <div className="text-center w-full max-w-[400px] mx-auto mb-[50px]">
            <div
              className="min-w-[300px] min-h-[300px] bg-gradient pt-[50px] rounded-full overflow-hidden"
              data-aos-easing="linear"
              data-aos-duration="1000"
              data-aos="fade-right"
            >
              <img src="images/profile.png" alt=""></img>
            </div>
            <h2 className="text-gradient text-[50px] mt-[20px]">
              Muhammad Rushelasli
            </h2>
          </div> */}
          <div
            className="w-[50%] lg:pt-[50px] lg:ml-[50px]"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos="fade-right"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="images/1.png" alt="" />
                  {/* <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">JQUERY</h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="images/2.png" alt="" />
                  {/* <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">BOOTSTRAP</h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="images/3.png" alt="" />
                  {/* <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">CSS</h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="images/4.png" alt="" />
                  {/* <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">HTML</h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="images/js.webp" alt="" />
                  {/* <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">JAVASCRIPT</h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="images/tw.png" alt="" />
                  {/* <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">TAILWIND</h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="images/php.svg" alt="" />
                  {/* <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">PHP</h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="images/Laravel.png" alt="" />
                  {/* <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">LARAVEL</h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="images/python.png" alt="" />
                  {/* <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">PYTHON</h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="images/django.png" alt="" />
                  {/* <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">DJANGO</h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="images/dart.png" alt="" />
                  {/* <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">DART</h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="images/flutter.png" alt="" />
                  {/* <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">FLUTTER</h4>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
