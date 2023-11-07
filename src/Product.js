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
      <div class="background-image3 min-h-screen flex items-center justify-center">
        <div class="videos-container grid grid-cols-5 gap-5 items-center justify-center">
          <div class="video">
            <h1 class="text-2xl font-semibold mb-4">Nahida Middle Finger</h1>
            <p class="text-gray-600">
              <image controls>
                <img class='video'
                  src="https://media.discordapp.net/attachments/1091296534370471997/1167377063301353502/illust_111431370_20231027_151439.jpg?"
                  type="image/jpg"
                  height={250}
                  width={250}
                />
              </image>
            </p>
            <br></br>
            <a
              class="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-600 transition"
              href="https://media.discordapp.net/attachments/1091296534370471997/1167377063301353502/illust_111431370_20231027_151439.jpg?ex=654de79c&is=653b729c&hm=7d595ef3ec58069cc48c36a0abbe2074f4d03df494dcb28bc0e42ab1a76f8072&=&width=312&height=312"
            >
              Download
            </a>
          </div>

          <div class="video">
            <h1 class="text-2xl font-semibold mb-4">Nahida in Wonderland</h1>
            <p class="text-gray-600">
              <image controls>
              <img class='video'
                src="https://media.discordapp.net/attachments/1091296534370471997/1170578061499039744/illust_112953485_20231105_111708.jpg?"
                type="image/jpg"
                height={200}
                width={200}
              />
              </image>
            </p>
            <br></br>
            <a
              class="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-600 transition"
              href="https://media.discordapp.net/attachments/1091296534370471997/1170578061499039744/illust_112953485_20231105_111708.jpg?ex=65598cc6&is=654717c6&hm=ad047fa922e21bcc10ba6edfcb489c8dcb79fb9c85ada56e54d28f5297e69e74&=&width=470&height=626"
            >
              Download
            </a>
          </div>

          <div class="video">
            <h1 class="text-2xl font-semibold mb-4">Nahida in Wonderland</h1>
            <p class="text-gray-600">
              <image controls>
              <img class='video'
                src="https://media.discordapp.net/attachments/1091296534370471997/1170578029693649007/illust_113018699_20231105_111833.png?"
                type="image/jpg"
                height={190}
                width={190}
              />
              </image>
            </p>
            <br></br>
            <a
              class="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-600 transition"
              href="https://media.discordapp.net/attachments/1091296534370471997/1170578029693649007/illust_113018699_20231105_111833.png?ex=65598cbe&is=654717be&hm=c2000ec59075c7e0e03d86bb070fd03287ff5dfb861bc36b19c3a0d92600e344&=&width=442&height=627"
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
