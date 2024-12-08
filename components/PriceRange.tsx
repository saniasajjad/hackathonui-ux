"use client";
import React, { useState } from "react";

function PriceRange() {
  const [priceRange, setPriceRange] = useState(0);

  return (
    <div>
      <input
        className="block"
        type="range"
        value={priceRange}
        name="priceRange"
        max={500}
        onChange={(e) => setPriceRange(parseInt(e.target.value))}
        id="priceRange"
      />
      <label
        className="block  md:text-[16px] lg:text-[20px] mt-5 text-[color:var(--secondary-dark-400)] font-semibold"
        htmlFor="priceRange"
      >
        MAX.${priceRange.toFixed(2)}
      </label>
    </div>
  );
}

export default PriceRange;
