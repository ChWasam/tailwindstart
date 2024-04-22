import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-[auto,auto,auto] h-screen justify-center content-center items-center justify-items-center  w-screen gap-6 bg-purple-300 ">
      <div className="bg-teal-400 text-6xl  ">111111111111111111111111</div>
      <div className="bg-orange-400 ">2</div>
      <div className="bg-yellow-400    ">3</div>
      <div className="bg-red-400   ">4</div>
      <div className="bg-green-400   ">55555555555555555555555555555555555</div>
      <div className="bg-blue-400   ">6</div>
    </main>
  );
}

// justify (grid) == justify(flex)
// content(grid) == item(flex)
// content -stretch is by default
// to bring text inside 2 allgn with 1
// with in container items-center and justify-items-center  == place- items-center
//outside container justify-center and content-center
