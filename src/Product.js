import React from 'react';
import Navbar from "./Navbar";
import "./background1.css";

export default function Example() {
  return (
    <div>
      <Navbar/>
      <div class="background-image bg-gray-100 background-image min-h-screen items-center justify-center grid grid-cols-4 gap-4">
        <div class="bg-white p-8 shadow-lg rounded-lg max-w-md">
          <h1 class="text-2xl font-semibold mb-4">Nahida</h1>
          <img
            src="https://media.discordapp.net/attachments/1091296534370471997/1167377063301353502/illust_111431370_20231027_151439.jpg?"
            alt="Nahida"
            width={1073}
            height={312}
          />
        </div>
      </div>
    </div>
  );
}
