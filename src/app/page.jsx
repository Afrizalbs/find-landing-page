/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import Image from "next/image";
import NavbarList from "@/components/NavbarList";

export default function Home() {
  return (
    <>
      <section className="bg-hero-pattern bg-cover bg-fixed bg-center md:bg-local">
        <header className="container mx-auto flex min-h-screen flex-col">
          <NavbarList className="flex justify-end px-5 py-9 md:justify-center md:px-0 lg:justify-end lg:pb-0 lg:pt-9" />
          <section className="flex flex-col gap-5 px-5 md:flex-row md:gap-0 md:px-0">
            <div className="flex">
              <h1 className="text-7xl font-bold text-white md:-mt-3 md:text-9xl lg:-mt-5 lg:text-[200px]">
                Find
              </h1>
              <figure className="h-6 w-6 md:h-8 md:w-8 lg:h-16 lg:w-16">
                <Image
                  src="/Vector.png"
                  alt="icon"
                  width={64}
                  height={64}
                  priority
                />
              </figure>
            </div>
            <div className="flex md:grow md:items-center md:justify-end">
              <p className="w-3/4 text-2xl font-bold text-white md:w-64 md:text-4xl lg:w-[470px] lg:text-6xl">
                Free Vehicle History Check
              </p>
            </div>
          </section>
        </header>

        <section className="grid grid-flow-col grid-rows-2 md:grid-flow-row md:grid-cols-5 md:grid-rows-none">
          <div className="col-span-3 box-border grid content-center bg-white bg-opacity-20 backdrop-blur  md:col-span-2 md:pl-20  md:align-middle">
            <p className="place-self-center text-lg font-bold md:place-self-auto lg:text-3xl">
              Verified Instant Car Check.
            </p>
          </div>
          <div className="col-span-2 bg-white p-5 lg:p-10">
            <input
              type="text"
              placeholder="Enter Reg"
              className="w-full p-2 text-sm text-black md:text-base"
            />
          </div>
          <button
            className="bg-[#BD7254] px-5 text-sm font-bold md:px-0 md:text-base lg:text-lg"
            type="submit"
          >
            Check Vehicle
          </button>
        </section>

        <section className="grid md:grid-cols-5">
          <div className="col-span-2 bg-[#17191A] bg-opacity-60 p-10 backdrop-blur md:pl-20 md:pr-10 lg:p-20">
            <p className="text-justify text-xs md:text-sm lg:text-xl lg:font-semibold">
              Whether you’re looking to ensure a fair price for a used vehicle,
              guarantee you get the best price for your current car or something
              else - it’s important to get trusted, accurate and affordable
              vehicle history so you can make a smart decision.
            </p>
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-1 bg-white bg-opacity-20 px-5 py-5 backdrop-blur-md md:place-items-center md:py-0">
            <div className="lg:w-40">
              <p className="font-bold md:text-xl lg:text-3xl">74,000+</p>
              <p className="mt-4 text-xs lg:text-sm">
                Vehicles were reported lost or stolen in 2020
              </p>
            </div>
            <div className="lg:w-40">
              <p className="font-bold md:text-xl lg:text-3xl">1 in 3</p>
              <p className="mt-4 text-xs lg:text-sm">
                Used cars are sold with outstanding finance
              </p>
            </div>
            <div className="lg:w-40">
              <p className="font-bold md:text-xl lg:text-3xl">1 in 12</p>
              <p className="mt-4 text-xs lg:text-sm">
                Used cars are listed as insurance write-offs
              </p>
            </div>
          </div>
        </section>
      </section>

      <main>
        <section className="bg-[#17191A] p-10 md:p-20">
          <div className="grid md:grid-cols-3">
            <Image
              src="/Arrow-down.png"
              alt="bg-icon"
              width={300}
              height={300}
              loading="lazy"
              className="hidden h-[170px] w-[170px] md:block lg:h-[300px] lg:w-[300px]"
            />
            <p className="text-center text-xl font-bold leading-relaxed md:col-span-2 md:text-justify md:text-2xl lg:text-5xl lg:leading-tight">
              In a matter of seconds, we check your vehicle against the major
              databases to make sure everything is as you expect it to be. You
              get all the relevant information to give you peace of mind over
              your purchase.
            </p>
            <div className="hidden md:block"> </div>
            <div className="mt-16 grid gap-16 md:col-span-2 md:grid-cols-2">
              {Array(4)
                .fill()
                .map(() => (
                  <div>
                    <Image src="/header-section.png" width={384} height={72} />
                    <p className="my-6 text-lg font-bold md:text-xl lg:text-2xl">
                      Technical Specifications
                    </p>
                    <p className="text-justify text-xs font-medium md:text-left md:text-sm lg:text-base">
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
          <div className="container mx-auto px-5 py-10 md:px-0">
            <div className="flex">
              <h2 className="text-5xl font-bold leading-none text-[#191D2B] md:text-9xl lg:text-[150px]">
                Find
              </h2>
              <figure className="h-6 w-6 md:h-10 md:w-10 lg:h-16 lg:w-16">
                <Image
                  src="/Vector-black.png"
                  alt="icon"
                  width={64}
                  height={64}
                />
              </figure>
            </div>
            <h2 className="text-5xl font-bold leading-none text-[#191D2B] md:text-9xl lg:text-[150px]">
              Experience
            </h2>

            <div className="mt-10 grid md:mt-24 md:grid-cols-3">
              <div className="flex flex-col md:col-span-1 md:justify-between">
                <p className="text-justify text-base font-medium text-[#191D2B] md:pr-10">
                  We provide a verified service that gives you access to any
                  vehicle’s full history in one easy-to understand report. With
                  Find, you instantly view the data that matters to you and know
                  you’re getting the most affordable and reliable check. See
                  below for why thousands of people across the UK choose OUR
                  instant car check.
                </p>
                <div className="hidden md:block md:justify-end">
                  <button
                    type="button"
                    className="rounded-full bg-[#191D2B] px-10 py-4 text-sm lg:text-base"
                  >
                    Check Vehicle Now
                  </button>
                </div>
              </div>
              <div className="mt-10 grid gap-x-16 gap-y-10 md:col-span-2 md:mt-0 md:grid-cols-2">
                {Array(6)
                  .fill()
                  .map(() => (
                    <div className="group border-t-2 border-[#191D2B] pt-6 hover:border-[#BD7254]">
                      <div className="flex gap-6">
                        <p className="text-xl font-bold text-[#191D2B] group-hover:text-[#BD7254] lg:text-2xl">
                          Car Finance Check
                        </p>
                        <Image src="/arrow-right.svg" width={24} height={24} />
                      </div>
                      <p className="mt-6 text-justify text-sm font-medium text-[#96A0B5] lg:text-base">
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

        <section className="bg-pricing bg-cover bg-fixed bg-center">
          <div className="grid min-h-screen md:grid-cols-3">
            <div className="flex flex-col px-5 py-20 md:px-10 lg:p-20">
              <h3 className="mb-10 text-4xl font-bold lg:text-6xl">Pricing</h3>
              <p className="flex-1 text-justify text-sm font-light lg:text-lg">
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
                className="mt-10 h-14 w-14 rotate-45 md:mt-0 md:rotate-0 lg:h-[72px] lg:w-[72px]"
              />
            </div>
            <div className="flex flex-col bg-[#454547CC] px-10 py-20 lg:p-20">
              <h3 className="text-4xl font-bold lg:text-6xl">FREE</h3>
              <p className="mt-2">Free Car Check</p>
              <div className="mt-10 flex flex-1 flex-col gap-y-6">
                {Array(5)
                  .fill()
                  .map(() => (
                    <div className="flex items-center gap-5">
                      <Image src="/tick-circle.svg" width={24} height={24} />
                      <p className="text-sm lg:text-base">
                        Vehicle Make, Model Colour
                      </p>
                    </div>
                  ))}
              </div>
              <div className="mt-10 md:mt-0">
                <button
                  type="button"
                  className="rounded-full bg-white px-10 py-4 text-sm font-bold text-[#191D2B] lg:text-lg"
                >
                  Check Now
                </button>
              </div>
            </div>

            <div className="flex flex-col bg-[#BD7254] px-10 py-20 lg:p-20">
              <h3 className="text-4xl font-bold lg:text-6xl">$19.99</h3>
              <p className="mt-2">Full Car Check</p>
              <div className="mt-10 flex flex-1 flex-col gap-y-6">
                {Array(5)
                  .fill()
                  .map(() => (
                    <div className="flex items-center gap-5">
                      <Image src="/tick-circle.svg" width={24} height={24} />
                      <p className="text-sm lg:text-base">
                        Vehicle Make, Model Colour
                      </p>
                    </div>
                  ))}
              </div>
              <div className="mt-10 md:mt-0">
                <button
                  type="button"
                  className="rounded-full bg-white px-10 py-4 text-sm font-bold text-[#191D2B] lg:text-lg"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#17191A] md:max-h-screen md:p-20">
          <div className="grid md:grid-cols-3">
            <Image
              src="/review-image.png"
              width={515}
              height={720}
              className="h-full object-cover"
            />
            <div className="bg-white p-10  text-[#191D2B] md:col-span-2 lg:p-20">
              <h2 className="text-2xl font-bold leading-snug md:text-3xl lg:text-5xl">
                Highly recommended by our customers
              </h2>
              <p className="mt-4 text-sm text-[#96A0B5] lg:text-lg">
                With over 1,000,000+ scans completed and a £30,000 peace of mind
                data guaranteee see why our customers love us
              </p>
              <p className="mt-8 text-xs font-medium leading-normal md:text-base lg:mt-16 lg:w-[600px] lg:text-xl">
                &quot; Excellent. We were buying a second hand car from someone
                we don’t know. And this site gives you everything you need to
                know. Highly recommend &quot;
              </p>

              <section className="mt-10 flex items-center justify-between">
                <div>
                  <p className="text-base font-medium lg:text-lg">
                    Alexandro Arnold
                  </p>
                  <div className="mt-2 flex gap-x-2 lg:gap-x-3">
                    {Array(5)
                      .fill()
                      .map(() => (
                        <Image
                          src="/star.svg"
                          width={20}
                          height={20}
                          className="h-4 w-4 lg:h-5 lg:w-5"
                        />
                      ))}
                  </div>
                </div>
                <div className="flex">
                  <Image
                    src="/arrow-left.svg"
                    width={48}
                    height={48}
                    className="h-8 w-8 lg:h-12 lg:w-12"
                  />
                  <Image
                    src="/arrow-right.svg"
                    width={48}
                    height={48}
                    className="h-8 w-8 lg:h-12 lg:w-12"
                  />
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="bg-[#17191A] px-5 py-10 text-white md:p-20">
          <div className="flex">
            <h2 className="text-5xl font-bold leading-none md:text-8xl lg:-mt-5 lg:text-[150px]">
              Find
            </h2>
            <figure className="h-6 w-6 md:h-10 md:w-10 lg:h-16 lg:w-16">
              <Image src="/Vector.png" alt="icon" width={64} height={64} />
            </figure>
          </div>
          <h2 className="text-5xl font-bold leading-none md:text-8xl lg:text-[150px]">
            Vehicle Free
          </h2>
          <div className="mt-10 grid gap-7 md:mt-20 md:grid-rows-2 lg:grid-cols-2 lg:gap-14">
            <p className="text-justify text-base font-normal lg:text-lg">
              All the vital vehicle information you need before you buy a car at
              a glance. We check your vehicle against multiple databases
              including DVLA Vehicle checking service, Experian, MIAFTR
              insurance database and the PNC.
            </p>
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex-1 rounded-full bg-white p-3 lg:p-6">
                <input
                  type="text"
                  placeholder="Enter Reg"
                  className="w-full rounded-full px-4 py-2 text-black"
                />
              </div>
              <button
                className="rounded-full bg-[#BD7254] p-5 font-bold lg:px-10 lg:py-8 lg:text-lg"
                type="submit"
              >
                Check Vehicle
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col bg-[#FFFFFF0A] px-10 py-12 md:flex-row md:flex-wrap md:px-20 lg:flex-nowrap">
        <section className="flex flex-col items-center gap-6 md:items-start">
          <p className="text-lg font-bold">Follow Us</p>
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

        <section className="flex-1 justify-end">
          <nav className="hidden md:block">
            <div className="flex flex-col items-end gap-5 lg:flex-row lg:justify-end lg:gap-9">
              <a
                href="#"
                className="text-white-300 rounded-md px-4 py-2 text-sm font-bold uppercase hover:bg-gray-700 hover:text-white"
              >
                Pricing
              </a>
              <a
                href="#"
                className="rounded-md px-4 py-2 text-sm font-bold uppercase text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Sample Report
              </a>
              <a
                href="#"
                className="rounded-md px-4 py-2 text-sm font-bold uppercase text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Testmony
              </a>
              <a
                href="#"
                className="rounded-md px-4 py-2 text-sm font-bold uppercase text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                faq
              </a>
              <a
                href="#"
                className="rounded-md px-4 py-2 text-sm font-bold uppercase text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                login
              </a>
              <a
                href="#"
                className="rounded-md px-4 py-2 text-sm font-bold uppercase text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                register
              </a>
            </div>
            <div className="mt-5 hidden justify-end lg:flex">
              <a
                href="#"
                className="rounded-md px-4 py-2 text-sm font-normal capitalize text-[#FFFFFF7A] hover:text-white"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="rounded-md px-4 py-2 text-sm font-normal capitalize text-[#FFFFFF7A] hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="rounded-md px-4 py-2 text-sm font-normal capitalize text-[#FFFFFF7A] hover:text-white"
              >
                Copyright©
                {new Date().getFullYear()}
                Find® LTD. All rights reserved
              </a>
            </div>
          </nav>
        </section>
        <section className="mt-5 flex w-full flex-col text-center md:flex-row md:justify-center lg:hidden">
          <a
            href="#"
            className="rounded-md px-4 py-2 text-sm font-normal capitalize text-[#FFFFFF7A] hover:text-white"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="rounded-md px-4 py-2 text-sm font-normal capitalize text-[#FFFFFF7A] hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="rounded-md px-4 py-2 text-sm font-normal capitalize text-[#FFFFFF7A] hover:text-white"
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
