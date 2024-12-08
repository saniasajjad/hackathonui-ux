import Image from "next/image";
import React from "react";

type Ad = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  backgroundColor: string;
  buttonBg: string;
  i: number
};

function HeroAds({
  title,
  description,
  buttonText,
  imageUrl,
  backgroundColor,
  buttonBg,
  i
}: Ad) {
  const adStyle = {
    backgroundColor: `var(--${backgroundColor})`,
  };
  const buttonStyle = {
    backgroundColor: `var(--${buttonBg})`,
  };
  return (
    <div
      className={`w-[100%] ${i=== 1 && "hidden md:block"} md:w-[50%] rounded-xl text-[color:var(--white)] p-6`}
      style={adStyle}
    >
      <h2 className="text-3xl font-semibold md:max-w-[65%] lg:max-w-[45%] ">
        {title}
      </h2>
      <p className="text-sm font-medium md:max-w-[65%] lg:max-w-[45%] py-5">
        {description}
      </p>
      <button
        className=" block  px-6 shadow-md py-2 rounded-md font-bold hover:shadow-xl duration-200"
        style={buttonStyle}
      >
        {buttonText}
      </button>
      <Image
        className="mx-auto pt-8 "
        src={imageUrl}
        alt="ads"
        width={400}
        height={300}
        priority
      />
    </div>
  );
}

export default HeroAds;
