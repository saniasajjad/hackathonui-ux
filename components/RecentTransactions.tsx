"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const RecentTransactionList = () => {
  const recentTransactions = [
    {
      id: 1,
      image: "/images/6.png",
      name: "Nissan GT-R",
      type: "Sport Car",
      date: "20 July",
      price: 80.0,
    },
    {
      id: 2,
      image: "/images/4.png",
      name: "Koenigsegg",
      type: "Sport Car",
      date: "19 July",
      price: 99.0,
    },
    {
      id: 3,
      image: "/images/2.png",
      name: "Rolls-Royce",
      type: "Sport Car",
      date: "18 July",
      price: 96.0,
    },
    {
      id: 4,
      image: "/images/1.png",
      name: "CR-V",
      type: "SUV",
      date: "17 July",
      price: 80.0,
    },
  ];

  return (
    <Card className="bg-white rounded-xl border-none shadow-md">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-lg font-semibold">Recent Transaction</CardTitle>
        <Link href="#" className="text-blue-500 hover:underline">
          View All
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <Image
                src={transaction.image}
                alt={transaction.name}
                width={64}
                height={64}
                className="rounded-md"
              />
              <div>
                <h3 className="text-gray-800 font-medium">{transaction.name}</h3>
                <p className="text-gray-500 text-sm">{transaction.type}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-800 font-medium">${transaction.price}.00</p>
              <p className="text-gray-500 text-sm">{transaction.date}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentTransactionList;
