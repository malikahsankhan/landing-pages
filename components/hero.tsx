"use client";
import { useState } from "react";

export default function HeroSection() {
  const [payMethod, setPayMethod] = useState("credit");
  const [email, setEmail] = useState("");

  return (
     <>
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
              <i className="fa-solid fa-arrow-right ml-2"></i>
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
            <div className="mb-5">
              <p className="text-xs text-slate-400 mb-0.5">Invoice</p>
              <p className="text-3xl font-extrabold text-slate-900">
                $1,876,580
              </p>
              <p className="text-xs text-slate-400 mt-0.5">April 21, 2024</p>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <button
                onClick={() => setPayMethod("credit")}
                className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
                  payMethod === "credit"
                    ? "border-teal-500 bg-teal-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm"><i className="fa-regular fa-credit-card"></i></span>
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
              <button
                onClick={() => setPayMethod("bank")}
                className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
                  payMethod === "bank"
                    ? "border-teal-500 bg-teal-50"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm"><i className="fa-solid fa-building-columns"></i></span>
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
            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
   <section className="bg-gradient-to-br from-slate-100 to-teal-50 px-6 py-20">
    <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-xl md:p-12">
      <p className="mb-5 inline-flex  px-4 py-2 text-sm font-semibold text-[#2a8f9e]">
        Future Payments
      </p>

      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-xl text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
          Experience that grows with your scale.
        </h2>
        <p className="max-w-md text-base leading-7 text-slate-500">
          Design a financial operating system that works for your business and
          streamlines cash flow management.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-xl text-[#2a8f9e]">
            <i className="fa-solid fa-money-bill-transfer"></i>
          </div>
          <h3 className="mb-3 text-xl font-bold text-slate-900">
            Free Transfers
          </h3>
          <p className="text-sm leading-6 text-slate-500">
            Send and receive payments quickly with fewer fees and simple
            tracking for every transaction.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-xl text-[#2a8f9e]">
            <i className="fa-solid fa-building-columns"></i>
          </div>
          <h3 className="mb-3 text-xl font-bold text-slate-900">
            Multiple Account
          </h3>
          <p className="text-sm leading-6 text-slate-500">
            Manage balances, invoices, and payouts from one clear dashboard as
            your company grows.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-xl text-[#2a8f9e]">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h3 className="mb-3 text-xl font-bold text-slate-900">
            Advanced Security
          </h3>
          <p className="text-sm leading-6 text-slate-500">
            Protect payment data with secure workflows, access control, and
            reliable account monitoring.
          </p>
        </div>
      </div>
    </div>
   </section>
   <section className="bg-gradient-to-br from-slate-100 to-teal-50 px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#2a8f9e]">
        Why Us
      </p>
      <h2 className="mb-12 max-w-2xl text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
        Why they prefer Finepay
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="mb-5 text-7xl font-extrabold text-[#2a8f9e]">3k+</p>
          <h3 className="max-w-xs text-2xl font-bold leading-snug text-slate-900">
            Businesses already running on Finepay
          </h3>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h3 className="mb-8 max-w-sm text-2xl font-bold leading-snug text-slate-900">
            Instant withdraw your funds at any time
          </h3>
          <div className="flex items-center gap-4 text-xl text-slate-900">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <i className="fa-brands fa-xbox"></i>
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2a8f9e] text-white">
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <i className="fa-solid fa-building-columns"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2a8f9e] text-xl text-white">
              <i className="fa-solid fa-chart-line"></i>
            </span>
            <h3 className="mb-4 max-w-sm text-3xl font-extrabold leading-tight text-slate-900">
              No asset volatility
            </h3>
            <p className="max-w-sm text-base leading-7 text-slate-500">
              Generate returns on your cash reserves without making risky
              investments.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Summary
                </p>
                <h3 className="mt-2 text-3xl font-extrabold text-slate-900">
                  $189,772.89
                </h3>
              </div>
              <span className="px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                6 Months <i className="fa-solid fa-angle-down ml-3"></i>
              </span>
            </div>

            <div className="h-64 w-full">
            <svg
              className="h-full w-full"
              viewBox="0 0 640 260"
              role="img"
              aria-label="Line graph from January to June"
            >
              <line x1="56" y1="34" x2="56" y2="204" stroke="#e2e8f0" />
              <line x1="56" y1="204" x2="608" y2="204" stroke="#e2e8f0" />
              {[64, 106, 148, 190].map((y) => (
                <line
                  key={y}
                  x1="56"
                  y1={y}
                  x2="608"
                  y2={y}
                  stroke="#f1f5f9"
                />
              ))}
              <path
                d="M56 176 C104 154 128 132 166 142 C218 156 236 96 276 104 C324 114 348 84 386 92 C434 102 458 56 498 64 C546 74 566 46 608 36"
                fill="none"
                stroke="#2a8f9e"
                strokeLinecap="round"
                strokeWidth="5"
              />
              {[
                [56, 176],
                [166, 142],
                [276, 104],
                [386, 92],
                [498, 64],
                [608, 36],
              ].map(([x, y]) => (
                <circle
                  key={`${x}-${y}`}
                  cx={x}
                  cy={y}
                  r="6"
                  fill="#ffffff"
                  stroke="#2a8f9e"
                  strokeWidth="4"
                />
              ))}
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, index) => (
                <text
                  key={month}
                  x={56 + index * 110}
                  y="238"
                  fill="#64748b"
                  fontSize="16"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  {month}
                </text>
              ))}
            </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
   <section className="bg-slate-950 px-6 py-20 text-white">
    <div className="mx-auto max-w-6xl">
      <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-teal-300">
        Step
      </p>

      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-xl text-3xl font-extrabold leading-tight md:text-4xl">
          Maximize your returns with a reserve account that generates growth.
        </h2>
        <p className="max-w-sm text-base leading-7 text-slate-400">
          Open your account, move funds securely, and watch your balance grow
          with a simple operating workflow.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]">
          <div className="mb-8">
            <span className="block text-8xl font-extrabold leading-none text-[#2a8f9e]">
              1
            </span>
          </div>
          <h3 className="mb-3 text-xl font-bold">Open your account</h3>
          <p className="text-sm leading-6 text-slate-400">
            Sign up to Finepay and set up your business account from the
            dashboard in minutes.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]">
          <div className="mb-8">
            <span className="block text-8xl font-extrabold leading-none text-[#2a8f9e]">
              2
            </span>
          </div>
          <h3 className="mb-3 text-xl font-bold">Transfer your money</h3>
          <p className="text-sm leading-6 text-slate-400">
            Move funds into your reserve account with secure transfers and
            clear transaction tracking.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]">
          <div className="mb-8">
            <span className="block text-8xl font-extrabold leading-none text-[#2a8f9e]">
              3
            </span>
          </div>
          <h3 className="mb-3 text-xl font-bold">Watch your balance grow</h3>
          <p className="text-sm leading-6 text-slate-400">
            Track your reserve performance and keep cash flow visible as your
            balance grows.
          </p>
        </div>
      </div>
    </div>
   </section>
   </>
  );
}
