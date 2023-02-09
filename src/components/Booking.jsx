import React from "react";

const Booking = () => {
  return (
    <div className="max-w-[1400px] m-auto w-full p-4">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col py-2 my-2">
          <label className="text-center font-semibold p-2">Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2">
            <option>Palm Jumeirah</option>
            <option>Burj Khalifa</option>
            <option>The Dubai Fountain</option>
            <option>Dubai Future Museum</option>
            <option>Ferrari World</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label className="text-center font-semibold p-2">Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label className="text-center font-semibold p-2">Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
        </div>
        <div className="flex flex-col my-2 py-2 w-full">
          <label className="text-center font-semibold p-2">Search</label>
          <button className="w-full bg-black text-gray-300">
            Prices and Availabilities
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
