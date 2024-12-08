import Footer from "@/components/Footer";
import Navabar from "@/components/navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navabar />
      <main className="max-w-7xl mx-auto container bg-brandBg">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
