import Image from "next/image";
import { use } from "react";

export default function Home() {
  return (
    <main className=" flex items-center h-screen  w-screen  bg-gray-300 ">
      <div className="  w-full flex flex-col justify-center p-8 bg-slate-100 rounded-xl shadow-lg max-w-[400px] min-h-[500px]  mx-auto">
        <button className="bg-blue-400 text-slate-50 font- border p-4 rounded-lg">
          Login
        </button>
        <button className="text-blue-400 border border-blue-400 p-4 mt-4 rounded-lg">
          Create account
        </button>
      </div>
    </main>
  );
}

// conversion from inline element  to block Element

// use
// className="block"
