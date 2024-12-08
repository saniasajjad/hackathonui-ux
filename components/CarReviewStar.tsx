import React from "react";
import Star from "./Star";

const CarReviewStar = ({
  carNumberOfReviews,
  showReviewText = true,
}: {
  carNumberOfReviews: number;
  showReviewText?: boolean;
}) => {
  return (
    <div className="flex gap-4 md:gap-6 py-2">
      <div className="flex gap-2 md:gap-3">
        {Array.from({ length: 5 }).map((eachStar, index) => (
          <Star
            key={index}
            fillColor={index < carNumberOfReviews ? "#FFC107" : ""}
          />
        ))}
      </div>
      {showReviewText && (
        <p className="font-medium text-[14px] text-[color:var(--secondary-dark-400)]">
          440+ Reviewer
        </p>
      )}
    </div>
  );
};

export default CarReviewStar;
