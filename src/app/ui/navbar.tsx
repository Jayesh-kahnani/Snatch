// src/components/Navbar.tsx

"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faPlus,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

import { ClipboardDocumentListIcon  } from "@heroicons/react/16/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const { data: session, status } = useSession();

  return (
    <div className="bg-blue-500 p-4">
      {/* Top Bar */}
      <div className="md:flex md:justify-between md:items-center">
        {/* Logo (Desktop) */}
        <Link href="/">
          <div className="hidden md:inline-block text-white font-extrabold text-2xl cursor-pointer mb-2 md:mb-0 p-2 border border-white rounded shadow-md md:ml-2 md:mr-2">
            <span className="text-yellow-400">S</span>natch
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/orders">
            <div className="flex items-center text-white hover:underline cursor-pointer">
              <ClipboardDocumentListIcon className="h-6 w-6 mr-1" />
              <span>Order List</span>
            </div>
          </Link>

          <Link href="/user-orders">
            <div className="flex items-center text-white hover:underline cursor-pointer">
              <FontAwesomeIcon icon={faBox} className="text-xl h-6 w-6 mr-1" />
              <span>Your Orders</span>
            </div>
          </Link>

          {/* Place New Order (Desktop) */}
          <Link href="/place-order">
            <div className="flex items-center">
              <span className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 rounded-full px-4 py-2 shadow-md border border-blue-500 mr-2">
                Place Order
              </span>
            </div>
          </Link>

          {/* Sign In/Sign Out (Desktop) */}
          {status === "authenticated" ? (
            <div
              className="flex items-center text-white hover:underline cursor-pointer border border-white rounded px-3 py-1"
              onClick={() => signOut()}
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="text-xl h-6 w-6 mr-1"
              />
              <span>Sign Out</span>
            </div>
          ) : (
            <div
              className="flex items-center text-white hover:underline cursor-pointer border border-white rounded px-3 py-1"
              onClick={() => signIn("google")}
            >
              <FontAwesomeIcon
                icon={faSignInAlt}
                className="text-xl h-6 w-6 mr-1"
              />
              <span>Sign In</span>
            </div>
          )}
        </div>
      </div>

      {/* Top Bar - Hidden for Desktops, Visible for Mobiles */}
      <div className="md:hidden flex justify-between items-center mb-2">
        {/* Logo (Mobile) */}
        <Link href="/">
          <div className="md:inline-block text-white font-extrabold text-2xl cursor-pointer p-2 border border-white rounded shadow-md">
            <span className="text-yellow-400">S</span>natch
          </div>
        </Link>
        {/* Sign In/Sign Out Buttons (Mobile) */}
        <div className="flex items-center space-x-4">
          {status === "authenticated" ? (
            <div
              className="flex items-center text-white hover:underline cursor-pointer border border-white rounded px-3 py-1 ml-2"
              onClick={() => signOut()}
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="text-xl h-6 w-6 mr-1"
              />
              <span>Sign Out</span>
            </div>
          ) : (
            <div
              className="flex items-center text-white hover:underline cursor-pointer border border-white rounded px-3 py-1 ml-2"
              onClick={() => signIn("google")}
            >
              <FontAwesomeIcon
                icon={faSignInAlt}
                className="text-xl h-6 w-6 mr-1"
              />
              <span>Sign In</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar (for mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-blue-500 p-2 flex justify-between">
        <Link href="/orders">
          <div className="flex items-center text-white hover:underline cursor-pointer border border-white rounded px-3 py-1">
            <ClipboardDocumentListIcon className="h-6 w-6" />
            <span className="text-xs">Order List</span>
          </div>
        </Link>

        <Link href="/user-orders">
          <div className="flex items-center text-white hover:underline cursor-pointer border border-white rounded px-3 py-1">
            <FontAwesomeIcon icon={faBox} className="text-xl h-6 w-6" />
            <span className="text-xs">Your Orders</span>
          </div>
        </Link>

        {/* Plus Icon (Mobile) */}
        <Link href="/place-order"> {/* Link to the same page as Place Order */}
          <div className="flex items-center text-white hover:underline cursor-pointer border border-white rounded px-3 py-1 ml-2">
            <FontAwesomeIcon icon={faPlus} className="text-xl h-6 w-6 mr-1" />
            <span className="text-xs">New</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
