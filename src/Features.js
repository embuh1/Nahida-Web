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
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Navbar from "./Navbar";
import React from "react";

const items = [
  {
    id: 1,
    title: "Back End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 2,
    title: "Front End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 3,
    title: "User Interface Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
  },
];

export default function Example() {
  return (
    <div>
      <Navbar />
      <div className="background-image2 min-h-screen items-center justify-center">
        <div class="videos-container grid grid-cols-3 gap-3 items-center justify-center">
          <div class="video">
            <h1 class="text-2xl font-semibold mb-4">
              Date A Bullet Nightmare or Queen
            </h1>
            <iframe
              src="https://drive.google.com/file/d/12-llnJizNhSBgw4wPI-Id86elpdu8VZd/preview"
              width="420"
              height="240"
              frameborder="0"
              allow="fullscreen"
            ></iframe>
            <br></br>
            <a
              class="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-600 transition"
              href="https://drive.google.com/file/d/12-llnJizNhSBgw4wPI-Id86elpdu8VZd/view"
            >
              Download
            </a>
          </div>

          <div class="video">
            <h1 class="text-2xl font-semibold mb-4">Tenki no Ko</h1>
            <iframe
              src="https://drive.google.com/file/d/1G5_56ZWopJS9zK6JcVT2esUJAdQO3r9i/preview"
              width="420"
              height="240"
              frameborder="0"
              allow="fullscreen"
            ></iframe>
            <br></br>
            <a
              class="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-600 transition"
              href="https://drive.google.com/file/d/1G5_56ZWopJS9zK6JcVT2esUJAdQO3r9i/view"
            >
              Download
            </a>
          </div>

          <div class="video">
            <h1 class="text-2xl font-semibold mb-4">Kisah tentang 3 Pilot</h1>
            <video controls width="420" height="240">
              <source
                src="https://cdn.discordapp.com/attachments/1076500882813898785/1147713289346895984/km_20230903_720p_30f_20230903_085417.mp4?"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <br></br>
            <a
              class="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-600 transition"
              href="https://cdn.discordapp.com/attachments/1076500882813898785/1147713289346895984/km_20230903_720p_30f_20230903_085417.mp4?ex=6546f7cb&is=653482cb&hm=740c027c18313b488f8d56c096ee87ba70ad2f3b79d98c1251827399ac236f46&"
            >
              Download
            </a>
          </div>
        </div>

        <div class="videos-container grid grid-cols-3 gap-3 items-center justify-center">
          <div class="video">
            <h1 class="text-2xl font-semibold mb-4">wilson kembali 😂</h1>
            <video controls width="420" height="240">
              <source
                src="https://cdn.discordapp.com/attachments/1076500882813898785/1168701093937676348/396505818_6491243974314103_6768173546488602338_n.mp4?"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <br></br>
            <a
              class="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-600 transition"
              href="https://cdn.discordapp.com/attachments/1076500882813898785/1168701093937676348/396505818_6491243974314103_6768173546488602338_n.mp4?ex=6552b8b6&is=654043b6&hm=ba05054041e486bb9bb48f865cce42008c2c09fdb6a3dc81904f2206b1e9a206&"
            >
              Download
            </a>
          </div>

          <div class="video">
            <h1 class="text-2xl font-semibold mb-4">Sholat lah kamu, maka kau akan selamat 😂</h1>
            <video controls width="200" height="100">
              <source
                src="https://cdn.discordapp.com/attachments/1076500882813898785/1166301547244814396/Gimana_pendapat_Anda_DISKON_BELANJA_50_CEK_STORY_YAA_Follow_langsingonlineDIET_SEHAT_BARENG_DOKTERFo..._dr.fatmaselisriFollow_dr.fatmaselisrisholat_ibadah_lucu_viral_humor_dietmenyenangkan_dietmulaisekarang_dietse.mp4?"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <br></br>
            <a
              class="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-600 transition"
              href="https://cdn.discordapp.com/attachments/1076500882813898785/1166301547244814396/Gimana_pendapat_Anda_DISKON_BELANJA_50_CEK_STORY_YAA_Follow_langsingonlineDIET_SEHAT_BARENG_DOKTERFo..._dr.fatmaselisriFollow_dr.fatmaselisrisholat_ibadah_lucu_viral_humor_dietmenyenangkan_dietmulaisekarang_dietse.mp4?ex=6549fdf5&is=653788f5&hm=0b65d79eedb37f7864cf049e48fdf979b86b9991dc3d059807243d7acd349092&"
            >
              Download
            </a>
          </div>

        </div>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">10</span> of{" "}
              <span className="font-medium">97</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-green-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                ...
              </span>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
