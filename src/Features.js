/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Navbar from "./Navbar";
import "./background2.css";
import React from 'react';

export default function Example() {
  return (
    <div>
      <Navbar />
      <div class="bg-gray-100 background-image min-h-screen items-center justify-center grid grid-cols-3 gap-4">
        
        <div class="bg-white p-8 shadow-lg rounded-lg max-w-md items-center justify-center">
          <h1 class="text-2xl font-semibold mb-4">
            Date A Bullet Nightmare or Queen
          </h1>
          <p>
            <iframe
              width="400"
              height="300"
              src="https://drive.google.com/file/d/12-llnJizNhSBgw4wPI-Id86elpdu8VZd/preview"
              title="Date or Alive"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <br></br>
          </p>
          <a
            class="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 transition"
            href="https://drive.google.com/file/d/12-llnJizNhSBgw4wPI-Id86elpdu8VZd/view"
          >
            Download
          </a>
        </div>

        <div class="bg-white p-8 shadow-lg rounded-lg max-w-md items-center justify-center">
          <h1 class="text-2xl font-semibold mb-4">
          Tenki no Ko
          </h1>
          <p>
            <iframe
              width="400"
              height="300"
              src="https://drive.google.com/file/d/1G5_56ZWopJS9zK6JcVT2esUJAdQO3r9i/preview"
              title="Date or Alive"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <br></br>
          </p>
          <a
            class="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 transition"
            href="https://drive.google.com/file/d/1G5_56ZWopJS9zK6JcVT2esUJAdQO3r9i/view"
          >
            Download
          </a>
        </div>

        <div class="bg-white p-8 shadow-lg rounded-lg max-w-md items-right justify-right">
          <h1 class="text-2xl font-semibold mb-4">Kisah tentang 3 Pilot</h1>
          <p>
            <video controls width="1020" height="720">
              <source
                src="https://cdn.discordapp.com/attachments/1076500882813898785/1147713289346895984/km_20230903_720p_30f_20230903_085417.mp4?ex=6546f7cb&is=653482cb&hm=740c027c18313b488f8d56c096ee87ba70ad2f3b79d98c1251827399ac236f46&"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <br></br>
          </p>
          <a
            class="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 transition"
            href="https://cdn.discordapp.com/attachments/1076500882813898785/1147713289346895984/km_20230903_720p_30f_20230903_085417.mp4?ex=6546f7cb&is=653482cb&hm=740c027c18313b488f8d56c096ee87ba70ad2f3b79d98c1251827399ac236f46&"
          >
            Download
          </a>
        </div>

      </div>
    </div>
  );
}
