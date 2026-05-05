"use client";
import { useState } from "react";

export default function HeroSection() {
  const [payMethod, setPayMethod] = useState("credit");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-teal-50 flex items-center px-6 py-16 font-sans">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-1 max-w-xl">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
            Get paid early
            <br />
            save automatically
            <br />
            all your pay.
          </h1>

          <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-sm">
            Supports small businesses with simple invoicing, powerful
            integrations, and cash flow management tools.
          </p>
          <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-md border border-slate-200 max-w-md">
            <input
              type="email"
              placeholder="Your business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3.5 text-sm text-slate-800 outline-none bg-transparent placeholder-slate-400"
            />
            <button className="bg-[#2a8f9e] hover:bg-teal-700 transition-colors text-white text-sm font-semibold px-5 py-3.5 whitespace-nowrap">
              Get Started
            </button>
          </div>
          <div className="flex items-center gap-8 mt-10 flex-wrap">
            <span className="text-slate-800 font-bold text-base tracking-tight">
              Klarna.
            </span>
            <span className="text-slate-800 font-bold text-base tracking-tight">
              coinbase
            </span>
            <span className="text-slate-800 font-bold text-base tracking-tight">
               instacart
            </span>
          </div>
        </div>
        <div className="flex-1 max-w-sm w-full relative min-h-80">
          <div className="absolute top-0 right-0 z-10 w-52 bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-5 text-white shadow-2xl">
            <p className="text-xs text-teal-200 mb-2">Credit Card</p>
            <p className="text-lg font-bold tracking-widest">234 **** ****</p>
            <div className="flex items-center justify-between mt-6">
              <span className="text-2xl font-extrabold italic tracking-wider">
                VISA
              </span>
              <span className="text-lg text-teal-300">))</span>
            </div>
          </div>

          <div className="relative z-20 bg-white rounded-2xl shadow-xl p-6 mt-12 mx-auto w-72">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                D
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Dipa Inhouse
                </p>
                <p className="text-xs text-slate-400 truncate w-40">
                  dipainhouse@gmail.co…
                </p>
              </div>
            </div>

            {/* Invoice Amount */}
            <div className="mb-5">
              <p className="text-xs text-slate-400 mb-0.5">Invoice</p>
              <p className="text-3xl font-extrabold text-slate-900">
                $1,876,580
              </p>
              <p className="text-xs text-slate-400 mt-0.5">April 21, 2024</p>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col gap-2 mb-4">
              {/* Credit Card Option */}
              <button
                onClick={() => setPayMethod("credit")}
                className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
                  payMethod === "credit"
                    ? "border-teal-500 bg-teal-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm">💳</span>
                  <span className="text-sm font-medium text-slate-700">
                    Credit Card
                  </span>
                </div>
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    payMethod === "credit"
                      ? "border-teal-500"
                      : "border-slate-300"
                  }`}
                >
                  {payMethod === "credit" && (
                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                  )}
                </div>
              </button>

              {/* Bank Account Option */}
              <button
                onClick={() => setPayMethod("bank")}
                className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
                  payMethod === "bank"
                    ? "border-teal-500 bg-teal-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm">🏦</span>
                  <span className="text-sm font-medium text-slate-700">
                    Bank Account
                  </span>
                </div>
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    payMethod === "bank"
                      ? "border-teal-500"
                      : "border-slate-300"
                  }`}
                >
                  {payMethod === "bank" && (
                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                  )}
                </div>
              </button>
            </div>

            {/* Pay Button */}
            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
