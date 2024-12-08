"use client";

import { useRouter } from "next/navigation";

const RentNowButton = ({
  href,
  paddingX = "16px",
  paddingY = "8px",
  fontSize = "16px",
}: {
  href?: string;
  paddingX?: string;
  paddingY?: string;
  fontSize?: string;
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href ? href : "/detail")}
      className="bg-[color:var(--primary-dark-500)] rounded-xl\ font-bold   text-[color:var(--white)] hover:bg-[color:var(--primary-dark-600)] duration-200"
      style={{
        paddingBlock: paddingY,
        paddingInline: paddingX,
        fontSize: fontSize,
      }}
    >
      Rent Now
    </button>
  );
};

export default RentNowButton;
