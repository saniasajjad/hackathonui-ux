import React from "react";
import CartTitle from "./CartTitle";
import CustomInput from "./CustomInput";

const RentalInfo = () => {
  return (
    <div className="my-8 bg-[color:var(--white)] rounded-xl p-5">
      <CartTitle
        title="Rental Info"
        subtitle="Please select your rental date"
        stepNumber={2}
      />
      <div className="mt-4">
        <div>
          <div className="flex items-center gap-2">
            <div>
              <div className="relative flex justify-center items-center  w-[40px] h-[40px]">
                <p className=" w-[10px] z-10  h-[10px] rounded-full bg-[color:var(--primary-dark-500)]"></p>
                <div className="absolute wave-animation  rounded-full h-[20px] w-[20px] bg-[color:var(--primary-dark-100)]"></div>
                <div className="absolute  rounded-full h-[20px] w-[20px] bg-[color:var(--secondary-dark-200)]"></div>
              </div>
            </div>
            <h3 className="font-semibold text-lg">Pick-up</h3>
          </div>
          <div className="grid grid-cols-1 grid-row-3 gap-6 my-8 md:grid-cols-2 md:grid-row-2 mt-2">
            <CustomInput
              icon={true}
              label="Location"
              type="text"
              placeholder="Select Your City..."
            />
            <CustomInput
              icon={true}
              label="Date"
              type="text"
              placeholder="Select Your Date..."
            />
            <CustomInput
              icon={true}
              label="Time"
              type="text"
              placeholder="Select Your time..."
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div>
              <div className="relative flex justify-center items-center  w-[40px] h-[40px]">
                <p className=" w-[10px] z-10  h-[10px] rounded-full bg-[color:var(--primary-dark-500)]"></p>
                <div className="absolute wave-animation  rounded-full h-[20px] w-[20px] bg-[color:var(--primary-dark-100)]"></div>
                <div className="absolute  rounded-full h-[20px] w-[20px] bg-[color:var(--secondary-dark-200)]"></div>
              </div>
            </div>
            <h3 className="font-semibold text-lg">Drop -- Off</h3>
          </div>
          <div className="grid grid-cols-1 grid-row-3 gap-6 my-8 md:grid-cols-2 md:grid-row-2 mt-2">
            <CustomInput
              label="Location"
              type="text"
              placeholder="Select Your City..."
              icon={true}
            />
            <CustomInput
              label="Date"
              type="text"
              placeholder="Select Your Date..."
              icon={true}
            />
            <CustomInput
              label="Time"
              type="text"
              placeholder="Select Your time..."
              icon={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalInfo;
