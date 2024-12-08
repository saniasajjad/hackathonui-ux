import RecentTransactionList from "@/components/RecentTransactions";
import { RentalCard } from "@/components/RideDetailsCard";
import { CarRentalChart } from "@/components/Stats";
import React from "react";

const AdminPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 md:grid-rows-2">
      <div className="row-span-2 col-span-1 mx-auto">
        <RentalCard model="Toyota" type="Sedan" id="123" pickupLocation="New York" pickupDate="2022-01-01" pickupTime="10:00 AM" dropoffLocation="Los Angeles" dropoffDate="2022-01-08" dropoffTime="10:00 AM" price={500} imageUrl="/images/2.png"/>
      </div>
      <div className=" row-span-1 col-span-1">
      <CarRentalChart />
      </div>
      <div className=" row-span-1 col-span-1">
        <RecentTransactionList />
      </div>
    </div>
  );
};

export default AdminPage;
