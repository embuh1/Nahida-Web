import Navbar from "./Navbar";
import "./YourStyles.css";
import "./video-container.css";
import React from "react";

export default function Example() {
  return (
    <div className="background-image background-image bg-gray-100 background-image min-h-screen items-center justify-center">
      <Navbar />
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-green-600 sm:text-4xl items-center justify-center">
              Selamat Datang di Website Nahida
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Features :<br></br>- Pictures
              <br></br>- video
              <br></br>- Music (Masih belum jadi)
              <br></br>- dll.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="https://tailwindcss.com/"
                className="text-sm font-semibold leading-6 text-lime-300"
              >
                Learn More <span aria-hidden="true">→</span>
              </a>
              <img
                src="https://media.discordapp.net/attachments/1091296534370471997/1167311280848257084/-Nahida-Roll-n-Rock-PUBG-Victo-unscreen.gif?"
                alt="Nahida"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <div>
              <video controls width="400" height="100">
                <source
                  src="https://cdn.discordapp.com/attachments/1076500882813898785/1167478572424892506/VID_70161027_130209_031.mp4?ex=654e4626&is=653bd126&hm=001599882d9e10446152e87301e3db39897866e33f496e12009df86312c79fe0&"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <h2 className="text-1xl font-Sans font-semibold text-blue-600 sm:text-2xl">
                Powered By :
              </h2>
              <a href="https://discord.gg/VNRHrcn8">
                <img
                  src="https://media.discordapp.net/attachments/1076500882813898784/1167071087448838206/image0.png?"
                  alt="Nightcord"
                  href="https://discord.gg/VNRHrcn8"
                  width={700}
                  height={500}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
