"use client";
import { useRouter } from "next/navigation";
const ViewAll = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/car-category")}
      className="text-[16px] font-normal text-[color:var(--primary-dark-500)]"
    >
      View All
    </button>
  );
};

export default ViewAll;
