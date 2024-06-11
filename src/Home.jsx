export function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src='https://png.pngtree.com/background/20230614/original/pngtree-black-and-white-gym-room-with-a-row-of-equipment-picture-image_3485114.jpg' alt="Gymini Home" className="w-[1600px] h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <div className="w-11/12 text-center sm:w-3/4 md:w-2/4 lg:w-2/3 xl:w-1/2">
          <h1 className="text-white mb-4 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Your health and fitness goals in no time
          </h1>
          <p className="text-white mb-12 opacity-80 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Take the guesswork out of fitness with our interactive step-by-step guide. Tailored to your unique goals and lifestyle, our customized plans ensure you achieve optimal results efficiently. Start your personalized fitness journey today and watch yourself transform!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
