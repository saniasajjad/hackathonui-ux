import React from "react";

function PickDuration() {
  return (
    <div className="flex gap-6">
      <div className="w-[33%]">
        <label
          className="block md:pb-2 text-[10px] sm:text-[12px] md:text-[16px] font-bold"
          htmlFor="location"
        >
          Location
        </label>
        <input
          className="focus:outline-none border-b w-full text-[10px] sm:text-[12px] md:text-[16px] placeholder:text-[10px] md:placeholder:text-[16px]"
          type="text"
          name="location"
          id="location"
          placeholder="Select your city"
        />
      </div>
      <div className="w-[33%]">
        <label
          className="block md:pb-2 text-[10px] sm:text-[12px] md:text-[16px] font-bold"
          htmlFor="date"
        >
          Date
        </label>
        <input
          className="focus:outline-none border-b w-full text-[10px] sm:text-[12px] md:text-[16px] placeholder:text-[10px] md:placeholder:text-[16px]"
          type="date"
          name="date"
          id="date"
          placeholder="Select your date"
        />
      </div>
      <div className="w-[33%]">
        <label
          className="block md:pb-2 text-[10px] sm:text-[12px] md:text-[16px] font-bold"
          htmlFor="time"
        >
          Time
        </label>
        <input
          className="focus:outline-none border-b w-full text-[10px] sm:text-[12px] md:text-[16px] placeholder:text-[10px] md:placeholder:text-[16px]"
          type="text"
          name="time"
          id="time"
          placeholder="Select your time"
        />
      </div>
    </div>
  );
}

export default PickDuration;
