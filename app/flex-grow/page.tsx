import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-gray-300 w-screen h-screen">
      <div className="flex items-center justify-center bg-red-200  w-full min-h-[100px] p-5 rounded-lg shadow-lg ">
        <input
          className=" bg-white rounded-l-lg px-4 py-2 flex-grow-[3]"
          type="email"
          placeholder="Enter Your Email"
        />
        <button
          className=" px-4 py-2  rounded-r-lg bg-green-600 font-bold text-white flex-grow-[1]"
          type="submit"
        >
          Subscribe
        </button>
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