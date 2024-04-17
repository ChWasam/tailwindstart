import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center bg-purple-800 w-screen h-screen">
      <div className="flex  shadow-2xl h-[300px] w-[600px]">
        <div className="flex flex-col justify-center  basis-1/2  rounded-l-lg p-4 gap-y-2 bg-green-300 text-center">
          <h1 className="font-bold text-xl ">Lorem, ipsum.</h1>
          <p> Lorem ipsum dolor sit.</p>
          <button className="flex justify-center mx-auto rounded-lg shadow-lg bg-red-500 p-2 text-white">
            Learn More
          </button>
        </div>
        <div className="flex flex-col justify-center p-4 rounded-r-lg  basis-1/2  gap-y-2 bg-blue-300 text-center">
          <h1 className="font-bold text-xl ">Lorem, ipsum.</h1>
          <p> Lorem ipsum dolor sit.</p>
          <button className="flex justify-center mx-auto  rounded-lg shadow-lg bg-red-500 p-2  text-white">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}

