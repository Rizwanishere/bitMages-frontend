import React from "react";

export function About() {
  return (
    <div className="relative max-w-[1600px] h-screen overflow-hidden">
      <img src="https://www.rchdesign.co.uk/wp-content/uploads/2019/09/gym-interior-design-1024x683.jpg" alt="About Gymini" className="w-[1600px] h-full object-cover"/>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <div className="w-11/12 text-center sm:w-3/4 md:w-2/4">
          <h1 className="text-white mb-4 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            About Gymini
          </h1>
          <p className="text-white mb-12 opacity-80 text-sm sm:text-base md:text-lg lg:text-xl">
            Gymini is your ultimate fitness companion. We provide customized workout plans, tailored to your individual needs and goals. Our mission is to help you achieve your fitness aspirations with ease and efficiency. Join us today and start your journey to a healthier, fitter you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
