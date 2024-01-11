import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Navbar from "./Navbar";
import "./product.css"


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

      <div className="box">
      <div className="group">
        <img className="rectangle" alt="Rectangle" src="https://media.discordapp.net/attachments/1169655452435492926/1194985181958914048/FB_IMG_1685842288965.jpg?ex=65b257ad&is=659fe2ad&hm=9bebfa0ed34c30dd526c70ddd6032cdfc6b8218a1e440046812864ec17fe8cca&=&format=webp&width=631&height=611" />
        <img className="img" alt="Rectangle" src="https://media.discordapp.net/attachments/1169655452435492926/1194985668758220840/FB_IMG_1676182851988.jpg?ex=65b25821&is=659fe321&hm=8cfdaefc0cc0fa0dcc57376d98e03ddb79a542e019ad1943cf62ad8bf36b30c0&=&format=webp&width=407&height=611" />
        <img className="rectangle-2" alt="Rectangle" src="https://media.discordapp.net/attachments/1169655452435492926/1194985878049796158/FB_IMG_1690634856463.jpg?ex=65b25853&is=659fe353&hm=c547d616a48fa70d6757e3ac5803a7c0d80c3b862ddf26d5fa9d85f0f001c956&=&format=webp&width=460&height=611" />
        <img className="rectangle-3" alt="Rectangle" src="https://cdn.discordapp.com/attachments/1169655452435492926/1194985298447310919/STK-20230422-WA0057.webp?ex=65b257c8&is=659fe2c8&hm=0172cb99c0bf4b8c76f75426a1daf07dc89a89aaa01c05583cad43bb132f0d59&" />
        <img className="rectangle-4" alt="Rectangle" src="https://media.discordapp.net/attachments/1169655452435492926/1194985487421685812/FB_IMG_1690354935604.jpg?ex=65b257f5&is=659fe2f5&hm=94d8db6a474f076454b67313cd463f34d0efee034b8bacbd284130ad12ac8736&=&format=webp&width=353&height=611" />
        <img className="rectangle-5" alt="Rectangle" src="https://media.discordapp.net/attachments/1169655452435492926/1194985583169245234/illust_109224888_20230731_155515.png?ex=65b2580c&is=659fe30c&hm=b3f88c7bdaf77b12d005462c5f39acb894c4af27c8fd3ac78dde574d0630efa5&=&format=webp&quality=lossless&width=1091&height=611" />
        <img className="ellipse" alt="Ellipse" src="https://media.discordapp.net/attachments/1169655452435492926/1194985781257830541/Picsart_23-08-08_07-59-00-965.png?ex=65b2583c&is=659fe33c&hm=0658c55a4adf5020c2477a6f888ab65e29f47b6ba34357bda7b0f7371162363b&=&format=webp&quality=lossless&width=608&height=611" />
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
