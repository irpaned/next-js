"use client";

import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import { Select, Option, Avatar } from "@material-tailwind/react";
import { useState } from "react";

export default function SideNav() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="my-3">
        <Select
          color="blue"
          label="Select Version"
          placeholder="Pilih Versi" // Coba tambahkan placeholder
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        {/* <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form> */}
      </div>
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => toggleOpen()}
          className={`${
            !open ? "w-auto" : "w-full"
          } flex items-center justify-between text-lg text-portal-gray hover:text-black px-4 rounded-lg font-medium`}
        >
          <div className="flex flex-row justify-center items-center gap-2">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
            />
            <div className="max-w-[141px]">
              <p className="mb-0 text-left text-nowrap overflow-hidden text-ellipsis">
                John Due
              </p>
              <p className="mb-0 text-left text-[12px] text-nowrap overflow-hidden text-ellipsis">
                john@mail.com
              </p>
            </div>
          </div>
          {/* <ChevronUp
            size={24}
            className={`transition-all ${open ? "rotate-180" : "rotate-0"}`}
          /> */}
        </button>
        <div
          className={`relative ps-4 border-l-2 border-gray-300 transition-all overflow-hidden ${
            open ? "h-auto" : "h-0"
          }`}
        >
          <Link
            href="/dashboard"
            className={`flex mb-1 items-center text-md hover:bg-portal-primary hover:text-black px-3 py-2 rounded-lg font-medium 
                 text-black bg-portal-primary
                  
              `}
          >
            asdads
          </Link>
          <button
            type="button"
            className={`flex mb-1 items-center w-full text-md text-portal-red hover:bg-portal-primary hover:text-black px-3 py-2 rounded-lg font-medium`}
            onClick={() => {}}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
