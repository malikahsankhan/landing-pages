"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-primary shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="text-xl font-bold">Finpay</div>

        <ul className="hidden space-x-8 text-gray-700 md:flex font-bold">
          <li className="cursor-pointer hover:text-[#2a8f9e]">Products</li>
          <li className="cursor-pointer hover:text-[#2a8f9e]">Customers</li>
          <li className="cursor-pointer hover:text-[#2a8f9e]">Pricing</li>
          <li className="cursor-pointer hover:text-[#2a8f9e]">Learn</li>
        </ul>

        <div className="hidden space-x-4 md:flex font-bold">
          <button className="px-4 py-2 rounded-xl cursor-pointer hover:bg-[#2a8f9e] hover:text-white border">Login</button>
          <button className="rounded-xl cursor-pointer bg-[#2a8f9e] px-4 py-2 text-white">
            Sign Up
          </button>
        </div>

        <button
          className="rounded-md px-3 py-2 text-2xl leading-none md:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
          aria-label="Toggle navigation menu"
        >
          {open ? "x" : "="}
        </button>
      </div>

      {open && (
        <div className="space-y-4 px-4 pb-4 md:hidden font-bold">
          <ul className="flex flex-col space-y-3 text-gray-700">
            <li>Products</li>
            <li>Customers</li>
            <li>Pricing</li>
            <li>Learn</li>
          </ul>

          <div className="flex flex-col space-y-2">
            <button className="rounded-xl hover:bg-teal-700 border px-4 py-2 cursor-pointer">Login</button>
            <button className="rounded-xl bg-[#2a8f9e] bg-teal-700 px-4 py-2 text-white curser-pointer">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
