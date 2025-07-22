import React from "react";
import { XMarkIcon, PhoneIcon, CheckIcon } from "@heroicons/react/24/outline";

const MemberHeader: React.FC = () => (
  <div className="bg-white px-6 pt-6 pb-2 rounded-t-lg border-b border-gray-100 relative font-[Rubik,sans-serif]">
    {/* Close "X" icon on the right */}
    <button
      className="absolute right-6 top-7 p-0 text-blue-700 hover:text-blue-900"
      aria-label="Close"
      type="button"
    >
      <XMarkIcon className="h-7 w-7" strokeWidth={2.5} />
    </button>

    {/* Top Row: Name & Badges */}
    <div className="flex items-center space-x-2 sm:space-x-3">
      <span className="text-2xl font-bold text-gray-900 font-[Rubik,sans-serif]">
        Sarah Burns
      </span>
      <span className="bg-green-200 text-green-900 rounded-full px-3 py-1 text-xs font-semibold font-[Rubik,sans-serif]">
        Low Risk
      </span>
      <span className="bg-yellow-100 text-yellow-900 rounded-full px-3 py-1 text-xs font-semibold font-[Rubik,sans-serif]">
        2 conditions
      </span>
      <span className="bg-blue-100 text-blue-900 rounded-full px-3 py-1 text-xs font-semibold inline-flex items-center font-[Rubik,sans-serif]">
        <CheckIcon className="w-4 h-4 mr-1" strokeWidth={3} />
        Active Coverage
      </span>
    </div>

    {/* Details row */}
    <div className="flex flex-wrap items-center space-x-2 mt-2 text-lg">
      <span className="text-gray-700 font-[Rubik,sans-serif]">Age 65</span>
      <span className="text-gray-700">&#8226;</span>
      <span className="text-gray-700 font-[Rubik,sans-serif]">
        Member ID: 7849202647423
      </span>
      <span className="flex items-center space-x-1 ml-2 font-[Rubik,sans-serif]">
        <PhoneIcon className="w-5 h-5 text-blue-700" />
        <a
          href="tel:9518374821"
          className="text-blue-700 font-medium hover:underline"
        >
          (951) 837-4821
        </a>
      </span>
    </div>
    <hr className="mt-4 -mx-6" />
  </div>
);

export default MemberHeader;
