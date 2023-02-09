import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="object-cover w-full h-full p-2 row-span-3"
          src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://images.pexels.com/photos/3873672/pexels-photo-3873672.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-3"
          src="https://images.pexels.com/photos/14292167/pexels-photo-14292167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://images.pexels.com/photos/12565208/pexels-photo-12565208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>

      {/* rigth side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold text-gray-800">
          Plan Your Next Trip
        </h3>
        <p className="text-2xl py-6 text-gray-800">
          Go on a journey of the senses through Dubai. We’ll inspire you to
          start imagining your own story.
        </p>
        <p className="pb-6">
          Get the most from your time in Dubai with these handpicked deals on
          hotels and experiences. In just a few days, you can pack in a world of
          experiences, from breathtaking art and high-end shopping to desert
          adventures and epic water parks.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-gray-300 hover:shadow-xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
