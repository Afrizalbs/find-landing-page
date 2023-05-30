/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import Image from "next/image";
import NavbarList from "@/components/NavbarList";

export default function Home() {
  return (
    <>
      <section className="bg-cover bg-hero-pattern md:bg-center">
        <header className="flex flex-col min-h-screen container mx-auto">
          <NavbarList className="md:py-9 flex justify-center lg:pt-9 lg:pb-0 lg:justify-end" />
          <section className="flex">
            <h1 className="lg:text-[200px] md:text-9xl font-bold -mt-3 lg:-mt-5">
              Find
            </h1>
            <figure className="lg:w-16 lg:h-16 md:w-8 md:h-8">
              <Image
                src="/Vector.png"
                alt="icon"
                width={64}
                height={64}
                priority
              />
            </figure>
            <div className="flex grow justify-end items-center">
              <p className="font-bold lg:text-6xl lg:w-[470px] md:text-4xl md:w-64">
                Free Vehicle History Check
              </p>
            </div>
          </section>
        </header>

        <section className="grid grid-cols-5">
          <div className="box-border bg-white bg-opacity-20 backdrop-blur pl-20 col-span-2 grid content-center md:align-middle">
            <p className="font-bold text-lg lg:text-3xl">
              Verified Instant Car Check.
            </p>
          </div>
          <div className="bg-white p-5 lg:p-10 col-span-2">
            <input
              type="text"
              placeholder="Enter Reg"
              className="text-black w-full p-2"
            />
          </div>
          <button
            className="bg-[#BD7254] font-bold text-base lg:text-lg"
            type="submit"
          >
            Check Vehicle
          </button>
        </section>

        <section className="grid grid-cols-5">
          <div className="col-span-2 bg-[#17191A] bg-opacity-60 backdrop-blur pl-20 pr-10  py-5 lg:p-20">
            <p className="text-sm text-justify lg:font-semibold lg:text-xl">
              Whether you’re looking to ensure a fair price for a used vehicle,
              guarantee you get the best price for your current car or something
              else - it’s important to get trusted, accurate and affordable
              vehicle history so you can make a smart decision.
            </p>
          </div>
          <div className="grid grid-cols-3 col-span-3 place-items-center bg-white bg-opacity-20 backdrop-blur-md md:px-5 gap-1">
            <div className="lg:w-40">
              <p className="font-bold text-xl lg:text-3xl">74,000+</p>
              <p className="text-xs lg:text-sm mt-4">
                Vehicles were reported lost or stolen in 2020
              </p>
            </div>
            <div className="lg:w-40">
              <p className="font-bold text-xl lg:text-3xl">1 in 3</p>
              <p className="text-xs lg:text-sm mt-4">
                Used cars are sold with outstanding finance
              </p>
            </div>
            <div className="lg:w-40">
              <p className="font-bold text-xl lg:text-3xl">1 in 12</p>
              <p className="text-xs lg:text-sm mt-4">
                Used cars are listed as insurance write-offs
              </p>
            </div>
          </div>
        </section>
      </section>

      <main>
        <section className="p-20 bg-[#17191A]">
          <div className="grid grid-cols-3">
            <Image
              src="/Arrow-down.png"
              alt="bg-icon"
              width={300}
              height={300}
              loading="lazy"
              className="w-[170px] h-[170px] lg:w-[300px] lg:h-[300px]"
            />
            <p className="col-span-2 font-bold text-2xl lg:text-5xl leading-tight text-justify">
              In a matter of seconds, we check your vehicle against the major
              databases to make sure everything is as you expect it to be. You
              get all the relevant information to give you peace of mind over
              your purchase.
            </p>
            <div> </div>
            <div className="col-span-2 mt-16 grid grid-cols-2 gap-16">
              {Array(4)
                .fill()
                .map(() => (
                  <div>
                    <Image src="/header-section.png" width={384} height={72} />
                    <p className="font-bold text-xl lg:text-2xl my-6">
                      Technical Specifications
                    </p>
                    <p className="font-medium text-sm lg:text-base">
                      Understanding vehicle specs like dimensions, BPH and
                      anti-lock braking system is crucial. All this and more can
                      be found out when you undertake our free car check.
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container mx-auto py-10">
            <div className="flex">
              <h2 className="text-[#191D2B] font-bold text-9xl lg:text-[150px] leading-none">
                Find
              </h2>
              <figure className="w-10 h-10 lg:w-16 lg:h-16">
                <Image
                  src="/Vector-black.png"
                  alt="icon"
                  width={64}
                  height={64}
                />
              </figure>
            </div>
            <h2 className="text-[#191D2B] font-bold text-9xl lg:text-[150px] leading-none">
              Experience
            </h2>

            <div className="mt-24 grid grid-cols-3">
              <div className="col-span-1 flex flex-col justify-between">
                <p className="text-base font-medium text-[#191D2B] text-justify pr-10">
                  We provide a verified service that gives you access to any
                  vehicle’s full history in one easy-to understand report. With
                  Find, you instantly view the data that matters to you and know
                  you’re getting the most affordable and reliable check. See
                  below for why thousands of people across the UK choose OUR
                  instant car check.
                </p>
                <div className="justify-end">
                  <button
                    type="button"
                    className="bg-[#191D2B] px-10 py-4 rounded-full text-sm lg:text-base"
                  >
                    Check Vehicle Now
                  </button>
                </div>
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-x-16 gap-y-10">
                {Array(6)
                  .fill()
                  .map(() => (
                    <div className="border-t-2 border-[#191D2B] group hover:border-[#BD7254] pt-6">
                      <div className="flex gap-6">
                        <p className="text-[#191D2B] font-bold text-xl lg:text-2xl group-hover:text-[#BD7254]">
                          Car Finance Check
                        </p>
                        <Image src="/arrow-right.svg" width={24} height={24} />
                      </div>
                      <p className="text-[#96A0B5] text-sm lg:text-base font-medium mt-6 text-justify">
                        This isn’t a step you want to skip. The last thing you
                        want is to finally get your hands on your nice new car,
                        only to find out there’s outstanding finance that you
                        need to cover. It’s a costly mistake, but one you can
                        avoid easily with our car finance check.
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-pricing bg-cover">
          <div className="grid grid-cols-3 min-h-screen">
            <div className="px-10 py-20 lg:p-20 flex flex-col">
              <h3 className="font-bold text-4xl lg:text-6xl mb-10">Pricing</h3>
              <p className="font-light text-sm lg:text-lg text-justify flex-1">
                Find offer the most comprehensive free car check on the market -
                including a full history report on everything there is to know
                about any car in the World. We provide reliable, detailed
                insights into all aspects of a vehicle so you know exactly what
                you’re dealing with. Perfect for car buyers, sellers and
                dealerships.
              </p>
              <Image
                src="/arrow-right-white.svg"
                width={72}
                height={72}
                className="w-14 h-14 lg:h-[72px] lg:w-[72px] "
              />
            </div>
            <div className="bg-[#454547CC] px-10 py-20 lg:p-20 flex flex-col">
              <h3 className="font-bold text-4xl lg:text-6xl">FREE</h3>
              <p className="mt-2">Free Car Check</p>
              <div className="flex flex-1 flex-col gap-y-6 mt-10">
                {Array(5)
                  .fill()
                  .map(() => (
                    <div className="flex gap-5">
                      <Image src="/tick-circle.svg" width={24} height={24} />
                      <p className="text-sm lg:text-base">
                        Vehicle Make, Model Colour
                      </p>
                    </div>
                  ))}
              </div>
              <div>
                <button
                  type="button"
                  className="bg-white text-[#191D2B] font-bold text-sm lg:text-lg px-10 py-4 rounded-full"
                >
                  Check Now
                </button>
              </div>
            </div>

            <div className="px-10 py-20 lg:p-20 bg-[#BD7254] flex flex-col">
              <h3 className="font-bold text-4xl lg:text-6xl">$19.99</h3>
              <p className="mt-2">Full Car Check</p>
              <div className="flex flex-1 flex-col gap-y-6 mt-10">
                {Array(5)
                  .fill()
                  .map(() => (
                    <div className="flex gap-5">
                      <Image src="/tick-circle.svg" width={24} height={24} />
                      <p className="text-sm lg:text-base">
                        Vehicle Make, Model Colour
                      </p>
                    </div>
                  ))}
              </div>
              <div>
                <button
                  type="button"
                  className="bg-white text-[#191D2B] font-bold text-sm lg:text-lg px-10 py-4 rounded-full"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-h-screen bg-[#17191A] p-20">
          <div className="grid grid-cols-3">
            <Image
              src="/review-image.png"
              width={515}
              height={720}
              className="object-cover h-full"
            />
            <div className="col-span-2 bg-white  text-[#191D2B] p-10 lg:p-20">
              <h2 className="font-bold text-3xl lg:text-5xl leading-snug">
                Highly recommended by our customers
              </h2>
              <p className="mt-4 text-[#96A0B5] text-sm lg:text-lg">
                With over 1,000,000+ scans completed and a £30,000 peace of mind
                data guaranteee see why our customers love us
              </p>
              <p className="font-medium text-base lg:text-xl leading-normal lg:w-[600px] mt-8 lg:mt-16">
                &quot; Excellent. We were buying a second hand car from someone
                we don’t know. And this site gives you everything you need to
                know. Highly recommend &quot;
              </p>

              <section className="mt-10 flex justify-between items-center">
                <div>
                  <p className="font-medium text-base lg:text-lg">
                    Alexandro Arnold
                  </p>
                  <div className="flex gap-x-2 lg:gap-x-3 mt-2">
                    {Array(5)
                      .fill()
                      .map(() => (
                        <Image
                          src="/star.svg"
                          width={20}
                          height={20}
                          className="w-4 h-4 lg:w-5 lg:h-5"
                        />
                      ))}
                  </div>
                </div>
                <div className="flex">
                  <Image
                    src="/arrow-left.svg"
                    width={48}
                    height={48}
                    className="w-8 h-8 lg:w-12 lg:h-12"
                  />
                  <Image
                    src="/arrow-right.svg"
                    width={48}
                    height={48}
                    className="w-8 h-8 lg:w-12 lg:h-12"
                  />
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="bg-[#17191A] text-white p-20">
          <div className="flex">
            <h2 className="font-bold text-8xl lg:text-[150px] leading-none lg:-mt-5">
              Find
            </h2>
            <figure className="w-10 h-10 lg:w-16 lg:h-16">
              <Image src="/Vector.png" alt="icon" width={64} height={64} />
            </figure>
          </div>
          <h2 className="font-bold text-8xl lg:text-[150px] leading-none">
            Vehicle Free
          </h2>
          <div className="grid grid-rows-2 lg:grid-cols-2 gap-7 lg:gap-14 mt-20">
            <p className="font-normal text-justify text-base lg:text-lg">
              All the vital vehicle information you need before you buy a car at
              a glance. We check your vehicle against multiple databases
              including DVLA Vehicle checking service, Experian, MIAFTR
              insurance database and the PNC.
            </p>
            <div className="flex gap-3 items-center">
              <div className="bg-white p-3 lg:p-6 rounded-full flex-1">
                <input
                  type="text"
                  placeholder="Enter Reg"
                  className="text-black w-full py-2 px-4 rounded-full"
                />
              </div>
              <button
                className="bg-[#BD7254] font-bold lg:text-lg rounded-full p-5 lg:py-6 lg:px-10"
                type="submit"
              >
                Check Vehicle
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#FFFFFF0A] px-20 py-12 flex flex-wrap lg:flex-nowrap">
        <section className="flex flex-col gap-6">
          <p className="font-bold text-lg">Follow Us</p>
          <div className="flex gap-4">
            <Image
              src="/instagram.png"
              width={48}
              height={48}
              className="rounded-full"
            />
            <Image
              src="/facebook.png"
              width={48}
              height={48}
              className="rounded-full"
            />
            <Image
              src="/linkenin.png"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        </section>

        <section className="justify-end flex-1">
          <nav className="hidden md:block">
            <div className="flex flex-col items-end lg:flex-row lg:justify-end gap-5 lg:gap-9">
              <a
                href="#"
                className="text-white-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-bold uppercase"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-bold uppercase"
              >
                Sample Report
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-bold uppercase"
              >
                Testmony
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-bold uppercase"
              >
                faq
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-bold uppercase"
              >
                login
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-bold uppercase"
              >
                register
              </a>
            </div>
            <div className="hidden lg:flex justify-end mt-5">
              <a
                href="#"
                className="text-[#FFFFFF7A] hover:text-white px-4 py-2 rounded-md text-sm font-normal capitalize"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-[#FFFFFF7A] hover:text-white px-4 py-2 rounded-md text-sm font-normal capitalize"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#FFFFFF7A] hover:text-white px-4 py-2 rounded-md text-sm font-normal capitalize"
              >
                Copyright©
                {new Date().getFullYear()}
                Find® LTD. All rights reserved
              </a>
            </div>
          </nav>
        </section>
        <section className="block lg:hidden text-center w-full mt-5">
          <a
            href="#"
            className="text-[#FFFFFF7A] hover:text-white px-4 py-2 rounded-md text-sm font-normal capitalize"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="text-[#FFFFFF7A] hover:text-white px-4 py-2 rounded-md text-sm font-normal capitalize"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-[#FFFFFF7A] hover:text-white px-4 py-2 rounded-md text-sm font-normal capitalize"
          >
            Copyright©
            {new Date().getFullYear()}
            Find® LTD. All rights reserved
          </a>
        </section>
      </footer>
    </>
  );
}
