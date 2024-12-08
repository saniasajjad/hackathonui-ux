import { Car, ChevronDown } from "lucide-react";
import Image from "next/image";

interface RentalCardProps {
  imageUrl?: string;
  model: string;
  type: string;
  id: string;
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  dropoffLocation: string;
  dropoffDate: string;
  dropoffTime: string;
  price: number;
}

export function RentalCard({
  imageUrl,
  model,
  type,
  id,
  pickupLocation,
  pickupDate,
  pickupTime,
  dropoffLocation,
  dropoffDate,
  dropoffTime,
  price,
}: RentalCardProps) {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-bold">Details Rental</h2>

        {/* Map Placeholder */}
        <div className="w-full rounded-lg relative">
          <Image
            src={"/icons/Maps.svg"}
            alt="map placeholder"
            width={500}
            height={272}
          />
        </div>

        {/* Car Details */}
        <div className="flex items-center gap-4 p-4  rounded-lg">
          {imageUrl ? (
            <div className=" bg-blue-700 p-3 rounded-xl">
              <Image
                src={imageUrl}
                alt={model}
                width={132}
                height={72}
                objectFit="cover"
              />
            </div>
          ) : (
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
              <Car className="w-8 h-8 text-blue-600" />
            </div>
          )}
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">{model}</h3>
              <p className="text-sm text-gray-600">{type}</p>
            </div>
            <span className="text-xs text-gray-500">#{id}</span>
          </div>
        </div>

        {/* Pickup Details */}
        <div className="space-y-4">
        <div className="flex items-center gap-2">
            <div>
              <div className="relative flex justify-center items-center  w-[40px] h-[40px]">
                <p className=" w-[5px] z-10  h-[5px] rounded-full bg-[color:var(--primary-dark-500)]"></p>
                <div className="absolute wave-animation  rounded-full h-[15px] w-[15px] bg-[color:var(--primary-dark-100)]"></div>
                <div className="absolute  rounded-full h-[15px] w-[15px] bg-[color:var(--secondary-dark-200)]"></div>
              </div>
            </div>
            <h3 className="font-semibold text-lg">Pick-up</h3>
          </div>
          <div className="space-y-4 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-base font-bold text-gray-700">Location</p>
              <p className="text-xs text-regular flex gap-2 text-gray-600">
                {pickupLocation}
                <ChevronDown className="size-4" />
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-base font-bold text-gray-700">Date</p>
              <p className="text-xs text-regular flex gap-2 text-gray-600">
                {pickupDate}
                <ChevronDown className="size-4" />
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-base font-bold text-gray-700">Time</p>
              <p className="text-xs text-regular flex gap-2 text-gray-600">
                {pickupTime}
                <ChevronDown className="size-4" />
              </p>
            </div>
          </div>
        </div>

        {/* Dropoff Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div>
              <div className="relative flex justify-center items-center  w-[40px] h-[40px]">
                <p className=" w-[5px] z-10  h-[5px] rounded-full bg-[color:var(--primary-dark-500)]"></p>
                <div className="absolute wave-animation  rounded-full h-[15px] w-[15px] bg-[color:var(--primary-dark-100)]"></div>
                <div className="absolute  rounded-full h-[15px] w-[15px] bg-[color:var(--secondary-dark-200)]"></div>
              </div>
            </div>
            <h3 className="font-semibold text-lg">Drop-Off</h3>
          </div>
          <div className="space-y-4 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-base font-bold text-gray-700">Location</p>
              <p className="text-xs text-regular flex gap-2 text-gray-600">
                {dropoffLocation}
                <ChevronDown className="size-4" />
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-base font-bold text-gray-700">Date</p>
              <p className="text-xs text-regular flex gap-2 text-gray-600">
                {dropoffDate}
                <ChevronDown className="size-4" />
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-base font-bold text-gray-700">Time</p>
              <p className="text-xs text-regular flex gap-2 text-gray-600">
                {dropoffTime}
                <ChevronDown className="size-4" />
              </p>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="pt-4 border-t flex justify-between items-center">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Total Rental Price</p>
            <p className="text-xs text-gray-500">
              Overall price and includes rental discount
            </p>
          </div>
          <p className="text-2xl font-bold">${price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
