import React from "react";
import { Card } from "flowbite-react";
import Navbr from "../components/Navbr";

export default function About (){
    return (
        <>
        <Navbr />

        <div class="flex justify-center py-20 px-4 md:px-20 md:py-16 w-full mx-auto">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p class="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
    </div>
  </div>
</div>
        </>
    )
}