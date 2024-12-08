"use client";
import React from "react";
import Image from "next/image";
import { carById } from "@/data/cars";

const FavoriteButton = ({
  isFavorite,
  id,
}: {
  isFavorite: boolean;
  id: number;
}) => {
  const [favorite, setFavorite] = React.useState(isFavorite);
  const handleFavorite = (id: number) => {
    const car = carById(id);
    if (car) {
      car.isFavorite = !car.isFavorite;
    }
    setFavorite(!favorite);
  };
  return (
    <Image
      onClick={() => handleFavorite(id)}
      src={favorite ? "/icons/heart_fav.svg" : "/icons/heart.svg"}
      width={24}
      height={24}
      className="cursor-pointer "
      alt={"favioute"}
    />
  );
};

export default FavoriteButton;
