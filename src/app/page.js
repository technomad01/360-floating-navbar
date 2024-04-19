"use client";

import Image from "next/image";
import Hat from "@/components/Modal/Hat";
import NavBar from "@/components/navigation/Navbar";
import bg from "../../public/background.png";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <Image
        src={bg}
        fill
        cover="true"
        alt="background image"
        priority
        className=""
      />
      {/* navigation and modal */}
      <NavBar />
      <Hat />
    </div>
  );
}
