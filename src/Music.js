import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import Navbar from "./Navbar";

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
      <div class="background-image4 min-h-screen flex items-center justify-center">
        <div class="videos-container grid grid-cols-3 gap-3 items-center justify-center">
          <div class="video">
            <h1 class="text-2xl font-semibold mb-4">Aimer - Brave Shine</h1>
            <p class="text-gray-600">
              <audio controls>
                <source
                  src="https://cdn.discordapp.com/attachments/1169655452435492926/1170600958447853598/Aimer_-_Brave_Shine.mp3?ex=6559a219&is=65472d19&hm=d0ae54f0b182eaed77952e28e91041bc16de05d067911c50af27ca9aead464c2&"
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </p>
            <br></br>
            <a
              class="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-600 transition"
              href="https://cdn.discordapp.com/attachments/1169655452435492926/1170600958447853598/Aimer_-_Brave_Shine.mp3?ex=6559a219&is=65472d19&hm=d0ae54f0b182eaed77952e28e91041bc16de05d067911c50af27ca9aead464c2&"
            >
              Download
            </a>
          </div>

          <div class="video">
            <h1 class="text-2xl font-semibold mb-4">
              Ghost - Marry On A Cross
            </h1>
            <p class="text-gray-600">
              <audio controls>
                <source
                  src="https://cdn.discordapp.com/attachments/1169655452435492926/1170595584940445826/Ghost_-_Mary_On_A_Cross.mp3?ex=65599d18&is=65472818&hm=a3858aefdfa8e2cd4d5ff0601e9f253500b3c83504967559e4f84b481a0284ea&"
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </p>
            <br></br>
            <a
              class="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-600 transition"
              href="https://cdn.discordapp.com/attachments/1169655452435492926/1170595584940445826/Ghost_-_Mary_On_A_Cross.mp3?ex=65599d18&is=65472818&hm=a3858aefdfa8e2cd4d5ff0601e9f253500b3c83504967559e4f84b481a0284ea&"
            >
              Download
            </a>
          </div>

          <div class="video">
            <h1 class="text-2xl font-semibold mb-4">
              I Really Want to Stay at Your House
            </h1>
            <p class="text-gray-600">
              <audio controls>
                <source
                  src="https://cdn.discordapp.com/attachments/1169655452435492926/1170600397669417022/Cyberpunk_2077_Radio_Vol._2_Original_Soundtrack_CD_1_TRAC.mp3?ex=6559a193&is=65472c93&hm=58dda2d60ca15018fe3f9eea373cf72332d7931af357202b74aab58873d2fc6d&"
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </p>
            <br></br>
            <a
              class="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-600 transition"
              href="https://cdn.discordapp.com/attachments/1169655452435492926/1170600397669417022/Cyberpunk_2077_Radio_Vol._2_Original_Soundtrack_CD_1_TRAC.mp3?ex=6559a193&is=65472c93&hm=58dda2d60ca15018fe3f9eea373cf72332d7931af357202b74aab58873d2fc6d&"
            >
              Download
            </a>
          </div>
        </div>

        <div></div>

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
