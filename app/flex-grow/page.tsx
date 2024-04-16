import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-y-20 bg-purple-800 w-screen h-full">
      <div className="flex items-center justify-center bg-red-200  w-full min-h-[100px] p-5 rounded-lg shadow-lg ">
        <input
          className=" bg-white rounded-l-lg px-4 py-2 flex-grow-[2] "
          type="email"
          placeholder="Enter Your Email"
        />
        <button
          className=" px-4 py-2  rounded-r-lg bg-green-600 font-bold text-white flex-grow-[1] "
          type="submit"
        >
          Subscribe
        </button>
      </div>
      <div className=" flex flex-col items-center h-[600px] w-[400px] bg-teal-300 rounded-xl shadow-xl p-4 ">
        <h3 className="text-5xl">Lorem ipsum dolor sit.</h3>
        <p className="m-4 flex-grow ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
          aliquam beatae laborum perspiciatis et quisquam. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Beatae, sunt maiores nulla
          animi ratione, id cumque debitis dolorem eveniet vero dolores non quae
          alias! Vel consectetur officiis, voluptatem cupiditate molestiae
          itaque.
        </p>
        <button className=" bg-red-400 rounded-lg text-white p-4 ">
          Learn More
        </button>
      </div>

      <div className="flex w-full  justify-between rounded-lg mb-40 ">
        <button className="px-4 py-2 mx-4 rounded-lg shadow-lg bg-teal-400 flex-grow  ">
          1
        </button>
        <button className="px-4 py-2 mx-4 rounded-lg shadow-lg bg-red-400 flex-grow-[2]  ">
          2
        </button>
        <button className="px-4 py-2 mx-4 rounded-lg shadow-lg bg-yellow-400 flex-grow-[3] ">
          3
        </button>
      </div>
      <div className="   w-full  bg-orange-400 ">
        <ul className=" flex justify-center w-[1600px] py-8 mx-auto ">
          <li className="rounded-lg  hover:border-b-2 hover:flex hover:justify-center transition-all duration-1000 hover:flex-grow-[2]  shadow-lg  mx-4 px-4 py-2 bg-teal-500 ">
            Home
          </li>
          <li className="rounded-lg  hover:flex hover:justify-center hover:border-b-2 transition-all duration-1000 hover:flex-grow-[2] shadow-lg  mx-2  px-4 py-2 bg-teal-500 ">
            About
          </li>
          <li className="rounded-lg hover:border-b-2 hover:flex hover:justify-center transition-all duration-1000 hover:flex-grow-[2] shadow-lg  mx-2 px-4 py-2 bg-teal-500 ">
            Contact
          </li>
          <li className="rounded-lg hover:border-b-2  hover:flex hover:justify-center transition-all duration-1000 hover:flex-grow-[2] shadow-lg  mx-2 px-4 py-2 bg-teal-500 ">
            Services
          </li>
          <li className=" rounded-lg hover:border-b-2 hover:flex hover:justify-center transition-all duration-1000 hover:flex-grow-[2] shadow-lg mx-2 px-4 py-2 bg-teal-500 ">
            vlog
          </li>
        </ul>
      </div>
    </main>
  );
}

// flex shrink and flex grow flex child / items ka aupar apply ho ge

// flex grow jitni bhi left over space hoti ha ausa occupy karta ha

// flex grow expand in the direction of main axis

// flex-grow-[1]

// flex-grow-[3]

// flex-grow

// flex-grow-0 by default
// is ka matlab ha yeh flex grow nahi kara ga

// very Important for smooth transition
// transition-all duration-700
