import CustomInput from "@/components/CustomInput";
import BillingInfo from "@/components/BillingInfo";
import RentalInfo from "@/components/RentalInfo";
import React from "react";
import PaymentInfo from "@/components/PaymentInfo";
import ConsentInfo from "@/components/ConsentInfo";
import RentalSummary from "@/components/RentalSumary";
// TODO: Complete this Page
const RentCar = () => {
  return (
    <div className="container mx-auto px-4">
    <div className="my-8 flex flex-col-reverse gap-6 lg:flex-row">
      <main className="w-full lg:w-[60%]">
        <BillingInfo />
        <RentalInfo />
        <PaymentInfo />
        <ConsentInfo />
      </main>
      <aside className="w-full lg:w-[40%]">
        <div className="lg:sticky lg:top-24">
          <RentalSummary
            carName="Nissan GT-R"
            carImage="/icons/look.png"
            rating={4}
            reviewCount={440}
            subtotal={80.0}
            tax={0}
          />
        </div>
      </aside>
    </div>
  </div>

  );
};

export default RentCar;
