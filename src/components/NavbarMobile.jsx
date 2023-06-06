/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Image from "next/image";

export default function NavbarMobile({ sidebarOpen, onClick }) {
  return (
    <nav
      className={`absolute h-[90%] w-[91%] md:hidden ${
        sidebarOpen
          ? "rounded-xl bg-black opacity-90 transition ease-linear"
          : ""
      }`}
    >
      <div className="">
        <div>
          <div className="flex items-center justify-end py-3 md:hidden">
            <div className="md:hidden">
              <button type="button" onClick={onClick}>
                {sidebarOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <Image
                    src="/hamburger.png"
                    width={40}
                    height={40}
                    loading="lazy"
                    className="md:hidden"
                    alt="sidebar-icon"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mr-5 mt-8  text-right ${
              sidebarOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-end space-y-8">
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
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
