import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="h-24 md:px-10 px-2 flex justify-between items-center fixed top-0 left-0 right-0 z-40 bg-[#E2F5FB] shadow">
      <Image src={Logo} alt="ELBRIT logo image" className="w-48" />
    </nav>
  );
};

export default Navbar;
