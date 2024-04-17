import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-purple-700 h-screen w-screen  gap-y-4 ">
      <div>
        <div className=" flex items-center justify-center  w-[1000px] h-[500px]  rounded-lg shadow-lg p-4 gap-x-2  bg-yellow-500">
          <div className=" m-2 ">
            <h1 className=" font-bold mb-1 ">Lorem, ipsum dolor.</h1>
            <p>
              "Flex shrink applied on 10 Am in red." Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Architecto, tempora deserunt?
            </p>
          </div>
          <div className="flex ">
            <button className="bg-red-500 rounded-lg flex-shrink-0  mr-2 text-white py-1 px-3">
              10:30 AM
            </button>
          </div>
        </div>
      </div>

      <div className=" flex  justify-center items-center  w-[1000px] h-[500px]  rounded-lg shadow-lg p-4   bg-yellow-500">
        <div className=" m-2 ">
          <h1 className=" font-bold mb-1 ">Lorem, ipsum dolor.</h1>
          <p>
            "Flex shrink not applied on 10 Am in red" Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Architecto, tempora deserunt?
          </p>
        </div>
        <div className="flex ">
          <button className="bg-red-500 rounded-lg text-white py-1 px-3">
            10:30 AM
          </button>
        </div>
      </div>
    </main>
  );
}

// flex-shrink is by default   flex-shrink-1
// we will use flex-shrink-0