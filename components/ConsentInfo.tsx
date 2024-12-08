import React from "react";
import CartTitle from "./CartTitle";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import Image from "next/image";

const ConsentInfo = () => {
  return (
    <div className="my-8 bg-[color:var(--white)] p-5 rounded-xl">
      <CartTitle
        title="Confirmation"
        subtitle="We are getting to the end. Just few clicks and your rental is ready!"
        stepNumber={4}
      />
      <div className="mt-4">
        <div className="grid grid-cols-1 grid-row-2 gap-6 my-8  md:grid-cols-1 md:grid-row-2 mt-2">
          <div className="flex flex-row bg-brandBg items-start space-x-3 space-y-0 rounded-xl p-4">
            <Checkbox className="rounded border-slate-400 ring-slate-400" />
            <div className="space-y-1 leading-none">
              <h1>
                I agree with sending an Marketing and newsletter emails. No
                spam, promissed!
              </h1>
            </div>
          </div>
          <div className="flex flex-row bg-brandBg items-start space-x-3 space-y-0 rounded-xl p-4">
            <Checkbox className="rounded border-slate-400 ring-slate-400" />
            <div className="space-y-1 leading-none">
              <h1>I agree with our terms and conditions and privacy policy.</h1>
            </div>
          </div>
        </div>
      </div>
      <Button className="text-white rounded-xl   font-bold text-base py-6 px-8">
        Rent Now
      </Button>
      <div className="flex gap-2 flex-col mt-4">
        <Image
          src={"/icons/secure.svg"}
          alt="secure icon"
          height={32}
          width={32}
        />
        <h3 className="font-semibold text-base">All your data are safe</h3>
        <p className="text-xs text-gray-400">
          We are using the most advanced security to provide you the best
          experience ever.
        </p>
      </div>
    </div>
  );
};

export default ConsentInfo;
