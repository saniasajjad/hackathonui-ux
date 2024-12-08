import React from "react";
import PickDuration from "./PickDuration";

function Pick({ title }: { title: string }) {
  return (
    <div className=" bg-[color:var(--white)] px-6 py-4 w-full rounded-xl shadow-sm">
      <div className="flex gap-2 items-center pb-4">
        {/* Waves animation */}
        <div className="relative flex justify-center items-center  w-[40px] h-[40px]">
          <p className=" w-[10px] z-10  h-[10px] rounded-full bg-[color:var(--primary-dark-500)]"></p>
          <div className="absolute wave-animation  rounded-full h-[20px] w-[20px] bg-[color:var(--primary-dark-100)]"></div>
          <div className="absolute  rounded-full h-[20px] w-[20px] bg-[color:var(--secondary-dark-200)]"></div>
        </div>
        <h2 className="text-lg font-semibold leading-6">{title}</h2>
      </div>
      <PickDuration />
    </div>
  );
}

export default Pick;
