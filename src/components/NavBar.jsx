import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="/"
            class="flex items-center   
 space-x-3 rtl:space-x-reverse"
          >
            <span class="self-center text-2xl font-semibold whitespace-nowrap">
              eTracker
            </span>{" "}
             
          </a>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
          <a href="/login">
          <button type="button" class="mt-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
          </a>
        
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#home"
                  class="text-gray-900 hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#aboutUs" class="text-gray-900 hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#contact" class="text-gray-900 hover:underline">
                  contacts
                </a>
              </li>
            </ul>
          </div>
        </div>{" "}
         
      </nav>
    </div>
  );
};

export default NavBar;
