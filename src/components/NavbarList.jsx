/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import React from "react";

function NavbarList() {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-end gap-x-9">
          <a
            href="#"
            className="text-white-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Sample Report
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Testmony
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="w-14 h-14 mx-6 md:hidden">
        <Image
          src="/hamburger.png"
          width={56}
          height={56}
          alt="hambuger-icon"
        />
      </div>
    </>
  );
}

export default NavbarList;
