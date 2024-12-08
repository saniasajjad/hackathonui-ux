import React from "react";
import CustomInput from "./CustomInput";
import CartTitle from "./CartTitle";
import { ChevronDown } from "lucide-react";

const BillingInfo = () => {
  return (
    <div className="bg-[--white] py-4 rounded-xl p-5">
      <CartTitle
        title="Billing Info"
        subtitle="Please enter your billing info"
        stepNumber={1}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-6 my-8">
        <CustomInput
          type="text"
          placeholder="Your name"
          label="Name"
        />
        <CustomInput
          type="number"
          placeholder="Phone number"
          label="Phone Number"
        />
        <CustomInput type="text" placeholder="Address" label="Address" />
        <CustomInput type="text" placeholder="Town or city" label="Town/City" />
      </div>
    </div>
  );
};

export default BillingInfo;
