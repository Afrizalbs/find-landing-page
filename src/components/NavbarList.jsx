/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import React from "react";

function NavbarList({ className }) {
  return (
    <nav className={className}>
      <Image
        src="/hamburger.png"
        width={40}
        height={40}
        loading="lazy"
        className="md:hidden"
      />
      <div className="hidden md:block">
        <div className="flex justify-end gap-x-9">
          <a
            href="#"
            className="text-white-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#"
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Sample Report
          </a>
          <a
            href="#"
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Testmony
          </a>
          <a
            href="#"
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarList;
