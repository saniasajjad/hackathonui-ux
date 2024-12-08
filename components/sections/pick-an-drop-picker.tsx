"use client";

import { useState } from "react";
import Pick from "../pick";
import Image from "next/image";

function PickSection() {
  const [isFirst, setIsFirst] = useState(true);
  const swapPostion = () => {
    setIsFirst((prev: boolean) => !prev);
  };
  return (
    <div className="flex lg:flex-row flex-col items-center gap-8 relative  my-4">
      <Pick title={isFirst ? "Pick-Up" : "Drop-Off"} />
      <div
        onClick={swapPostion}
        className=" absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] bg-[color:var(--primary-dark-600)] p-4 rounded-xl cursor-pointer hover:scale-[1.01]    shadow-lg shadow-[color:var(--primary-dark-300)]"
      >
        <Image
          className="rotate-90 lg:rotate-0 min-w-[20px] "
          src={"/icons/swap.svg"}
          width={24}
          height={24}
          alt="swap"
        />
      </div>
      <Pick title={isFirst ? "Drop-Off" : "Pick-Up"} />
    </div>
  );
}

export default PickSection;
