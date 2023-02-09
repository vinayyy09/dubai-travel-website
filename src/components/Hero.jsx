import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />

      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-6">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Explore Dubai
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Enjoy the perfect dose of travel inspiration to experience the
            destination of Dubai.
          </p>
          <button className="hover:bg-white hover:text-black">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
