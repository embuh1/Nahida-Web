import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import "./Manga.css";


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

/*<div className="box">
      <div className="group">
        <div className="overlap">
        {currentImage && (
          <img className="rectangle" alt={currentImage.alt_description} src={currentImage.urls.regular} />
        )}
          <div className="text-wrapper"></div>
          <button onClick={handleImageChange}>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
            </div>
          </div>
          </button>
        </div>
      </div>
    </div>*/

export default function Example() {
  
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    fetchRandomImages();
  }, []);

  const fetchRandomImages = async () => {
    try {
      // For testing purposes, you can use placeholder image URLs
      const placeholderImages = [
        { id: 1, urls: { regular: 'https://media.discordapp.net/attachments/1091296534370471997/1194629642859073606/blue.archive_sensei-10-01-2024-0032.jpg?ex=65b10c8e&is=659e978e&hm=455638cd1932c095243d085701a3ca1b9690558cab6739a9131469e3300c1da9&=&format=webp&width=611&height=611' }, alt_description: 'Shiroko 1' },
        { id: 2, urls: { regular: 'https://media.discordapp.net/attachments/1091296534370471997/1194629643542741072/blue.archive_sensei-10-01-2024-0036.jpg?ex=65b10c8e&is=659e978e&hm=47cd33e87eca2a981cbd86dafdab540b39e156293d6555eb92a1e6d90f4ab156&=&format=webp&width=611&height=611' }, alt_description: 'Shiroko 2' },
        { id: 3, urls: { regular: 'https://media.discordapp.net/attachments/1091296534370471997/1194629643253321768/blue.archive_sensei-10-01-2024-0035.jpg?ex=65b10c8e&is=659e978e&hm=6400ce566092db2067d498a5e734bb7db7bbd80c91e8a39c0cd782c953d3e57f&=&format=webp&width=611&height=611' }, alt_description: 'Shiroko 3' },
        { id: 4, urls: { regular: 'https://media.discordapp.net/attachments/1091296534370471997/1194629460339736667/blue.archive_sensei-10-01-2024-0022.jpg?ex=65b10c62&is=659e9762&hm=f31cca63e43bc14d71ebe5505289879f374524407d917772c9ca04eb9a2c56a9&=&format=webp&width=611&height=611' }, alt_description: 'Shiroko 4' },
        { id: 5, urls: { regular: 'https://media.discordapp.net/attachments/1091296534370471997/1194629356060950548/blue.archive_sensei-10-01-2024-0019.jpg?ex=65b10c49&is=659e9749&hm=c223ce11c68ddb13641cd301f7352bd178fb2d1bc96027d865c6dfb5f0fa1488&=&format=webp&width=611&height=611' }, alt_description: 'Shiroko 5' },
        { id: 6, urls: { regular: 'https://media.discordapp.net/attachments/1091296534370471997/1194629328386928640/blue.archive_sensei-10-01-2024-0018.jpg?ex=65b10c43&is=659e9743&hm=47fba720ac2f99630e40731631c8191f5c9aee5d77806b910bafac639710c229&=&format=webp&width=611&height=611' }, alt_description: 'Shiroko Bonus' },
        // Add more placeholder images as needed
      ];
  
      setImages(placeholderImages);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleImageChange = () => {
    const newIndex = (images.indexOf(currentImage) + 1) % images.length;
    setCurrentImage(images[newIndex]);
  };

  return (
    <div>
      <Navbar />
      <div className="background-image2 min-h-screen items-center justify-center">

      <div className="box">
      <div className="group">
        <div className="overlap">
        {currentImage && (
          <img className="rectangle" alt={currentImage.alt_description} src={currentImage.urls.regular} />
          )}
          <div className="text-wrapper">{/*currentImage.alt_description*/}</div>
          <button className="button" onClick={handleImageChange}>
            <div className="overlap-group"></div>
          </button>
        </div>
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
