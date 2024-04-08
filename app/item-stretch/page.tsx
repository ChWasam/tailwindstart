import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex justify-between bg-gray-200 ">
      <div className="flex   max-w-[400px] p-8 bg-slate-50 rounded-lg shadow-lg">
        <span className="bg-red-500 p-4 rounded-md">1</span>
        <div className="ml-8">
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            voluptatum nostrum libero molestiae omnis dolore, culpa laborum
            voluptates molestias. Soluta!
          </p>
        </div>
      </div>

      <div className="flex items-start   max-w-[400px] p-8 bg-slate-50 rounded-lg shadow-lg">
        <span className="bg-red-500 p-4 rounded-md">1</span>
        <div className="ml-8">
          <h1>Lorem, ipsum dolor.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            voluptatum nostrum libero molestiae omnis dolore, culpa laborum
            voluptates molestias. Soluta!
          </p>
        </div>
      </div>
    </main>
  );
}

// 1st div item-stretch is by default (check red color)

// 2nd div item-start  (check red color)
