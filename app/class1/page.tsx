import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex justify-around m items-center bg-gray-300 m-80">
        <div className="w-2/3 text-center">
          <h1 className="text-7xl text-blue-700">Welcome to NorthBy</h1>
          <h2 className="text-4xl text-blue-400 mt-2">
            A premium in sight and sound
          </h2>
          <button className="border rounded border-black bg-blue-700 p-2 mt-4 mb-4">
            Learn More
          </button>
        </div>
        <div className="">
          <Image
            src="/pngtree.jpg"
            alt="Northby Image Logo"
            width={150}
            height={150}
          />
        </div>
      </div>
    </main>
  );
}
