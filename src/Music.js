import React from "react";
import Navbar from "./Navbar";
import "./background3.css";

export default function Example() {
  return (
    <div>
      <Navbar />
      <div class="background-image bg-gray-100 min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 shadow-lg rounded-lg max-w-md">
          <h1 class="text-2xl font-semibold mb-4">Layout Container Smooth</h1>
          <p class="text-gray-600">
            <audio controls>
              <source src="path-to-your-audio.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </p>
          <button class="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 transition">
            Tombol
          </button>
        </div>
      </div>
    </div>
  );
}
