import React from "react";
import gymBg from "./Assets/gymbg.jpg";

export function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img src={gymBg} alt="gym bg" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <div className="w-11/12 text-center sm:w-3/4 md:w-2/4">
          <h1 className="text-white mb-4 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Your health and fitness goals in no time
          </h1>
          <p className="text-white mb-12 opacity-80 text-sm sm:text-base md:text-lg lg:text-xl">
            Take the guesswork out of fitness with our interactive step-by-step guide. Tailored to your unique goals and lifestyle, our customized plans ensure you achieve optimal results efficiently. Start your personalized fitness journey today and watch yourself transform!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
