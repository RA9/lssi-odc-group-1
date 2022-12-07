import React from "react";

export default function SchoolsInfo() {
  return (
    <>
     <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    {/* <!--Card 1--> */}
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://unmil.unmissions.org/sites/default/files/styles/gallery/public/shb_3479_0.jpg?itok=T4u0vJx4" alt="Lutheran" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">St. Peter Lutheran High School</div>
        <p class="text-gray-700 text-base">
           St. Peter Lutheran High School is located in 14th Street, Moserrado County, Monrovia, Liberia. For more info read more.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
      </div>
    </div>
  </div>
    </>
  );
}

