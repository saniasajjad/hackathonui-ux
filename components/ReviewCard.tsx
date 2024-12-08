import React from "react";
import Image from "next/image";
import CarReviewStar from "./CarReviewStar";

const ReviewCard = () => {
  return (
    <div>
      <div className="flex gap-4 py-6">
        <div>
          <Image
            src={"/images/Profil.png"}
            width={50}
            height={50}
            alt="profil"
          />
        </div>
        <div className="w-full">
          <div className="flex w-full  justify-between">
            <div>
              <h3 className="text-[color:var(--secondary-dark-500)] text-[20px] font-bold">
                Alex Stanton
              </h3>
              <p className="text-[color:var(--secondary-dark-300)] text-[14px] font-medium">
                CEO at Bankok
              </p>
            </div>
            <div className="text-end">
              <h5>21 July 2022</h5>
              <CarReviewStar carNumberOfReviews={4} showReviewText={false} />
            </div>
          </div>
          <p className="font-normal  text-[14px] text-[color:var(--secondary-dark-400)] py-4 pr-4">
            We are very happy with the service from the MORENT App. Morent has a
            low price and also a large variety of cars with good and comfortable
            facilities. In addition, the service provided by the officers is
            also very friendly and very polite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
