import React from "react";

interface CartTitleProps {
  title: string;
  subtitle: string;
  stepNumber: number;
}
const CartTitle = ({ title, subtitle, stepNumber }: CartTitleProps) => {
  return (
    <div>
      <h2 className="font-bold text-[20px] text-[color:var(--secondary-dark-500)] ">
        {title}
      </h2>
      <div className="flex justify-between py-1">
        <p className="font-medium text-[14px] text-[color:var(--secondary-dark-300)] ">
          {subtitle}
        </p>
        <p className="font-medium text-[14px] text-[color:var(--secondary-dark-300)] ">
          Step {stepNumber} of 4
        </p>
      </div>
    </div>
  );
};

export default CartTitle;
