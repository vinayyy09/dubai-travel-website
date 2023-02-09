import React from "react";

const Food = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="grid grid-cols-2 col-span-2 gap-3">
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/5900506/pexels-photo-5900506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="object-cover w-full h-full row-span-2"
          src="https://images.pexels.com/photos/12518849/pexels-photo-12518849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/7545570/pexels-photo-7545570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>

      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-3xl font-bold text-gray-800">
          Amazing Delicacies!
        </h3>
        <p className="pt-4">
          Delicious food is a source of joy for many people. It can be enjoyed
          in the comfort of one's own home or savored at a restaurant.Whether
          it's a special occasion or just a regular day, having a delicious meal
          can bring people together and create memories that last a lifetime.
        </p>
      </div>
    </div>
  );
};

export default Food;
