import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 display p-36  ">
      <div className="rounded-xl shadow-lg bg-slate-50 mx-auto max-w-xs p-8">
        <h1 className="text-blue-500 font-extrabold text-4xl leading-10 my-4">
          Lorem ipsum dolor sit.
        </h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam non
          enim possimus temporibus. Similique assumenda quos maxime animi
          minima. Nulla voluptate cumque aspernatur sequi ad.
        </p>
        <div className="flex justify-between">
          <button className=" rounded-lg bg-blue-300 p-2">Previous</button>
          <button className=" rounded-lg bg-blue-300 p-2">Next</button>
        </div>
      </div>
    </main>
  );
}
