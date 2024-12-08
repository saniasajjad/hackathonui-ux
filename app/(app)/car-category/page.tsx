"use client";

import PriceRange from "@/components/PriceRange";
import CarSection from "@/components/sections/CarSection";
import PickSection from "@/components/pick_section";
import React, { useState } from "react";
import CategorySidebar from "@/components/CategorySidebar";
import { carsCollection } from "@/data/cars";

// TODO: FIx the margin in sidebar

function CarCategory() {
  return (
    <div className="bg-[color:var(--white)]">
        <div className="flex gap-2">
         <CategorySidebar />
          <main className="bg-[color:var(--background)] w-full px-6">
            <PickSection />

            <CarSection cars={carsCollection} isHomePage={false} showMoreButton={true} />
          </main>
        </div>
    </div>
  );
}

export default CarCategory;
