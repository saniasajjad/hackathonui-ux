import React from "react";
import CartTitle from "./CartTitle";
import CustomInput from "./CustomInput";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

const PaymentInfo = () => {
  return (
    <div className="my-8 bg-[color:var(--white)] p-5 rounded-xl ">
      <CartTitle
        title="Payment Info"
        subtitle="Please select your payment method"
        stepNumber={3}
      />
      <div className="mt-4 bg-brandBg p-4 rounded-xl">
        <div>
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2">
              <div className="relative flex justify-center items-center  w-[40px] h-[40px]">
                <p className=" w-[10px] z-10  h-[10px] rounded-full bg-[color:var(--primary-dark-500)]" />
                <div className="absolute wave-animation  rounded-full h-[20px] w-[20px] bg-[color:var(--primary-dark-100)]" />
                <div className="absolute  rounded-full h-[20px] w-[20px] bg-[color:var(--secondary-dark-200)]" />
              </div>
              <h3 className="font-semibold text-lg">Credit Card</h3>
            </div>
            <Image
              src={"/icons/Visa.svg"}
              alt="visa logo"
              height={20}
              width={92}
            />
          </div>
          <div className="grid grid-cols-1 grid-row-3 gap-6 my-8 md:grid-cols-2 md:grid-row-2 mt-2">
            <CustomInput
              inputClassName="bg-white"
              label="Location"
              type="text"
              placeholder="Select Your City..."
            />
            <CustomInput
              inputClassName="bg-white"
              label="Date"
              type="text"
              placeholder="Select Your Date..."
            />
            <CustomInput
              inputClassName="bg-white"
              label="Time"
              type="text"
              placeholder="Select Your time..."
            />
            <CustomInput
              inputClassName="bg-white"
              label="Time"
              type="text"
              placeholder="Select Your time..."
            />
          </div>
        </div>
      </div>
      <div className="mt-4 bg-brandBg p-4 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-base">
          <Input type="radio" className="size-5" readOnly />
          Paypal
        </div>
        <Image
          src={"/icons/PayPal.svg"}
          alt="Paypal logo"
          height={20}
          width={92}
        />
      </div>
      <div className="mt-4 bg-brandBg p-4 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-base">
          <Input type="radio" className="size-5" readOnly value={""}/>
          Bitcoin
        </div>
        <Image
          src={"/icons/Bitcoin.svg"}
          alt="Paypal logo"
          height={20}
          width={92}
        />
      </div>
    </div>
  );
};

export default PaymentInfo;
