import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-[auto,auto,1fr] h-screen w-screen gap-6 bg-purple-300 ">
      <div className="bg-teal-400 self-center  ">111111111111111111111111</div>
      <div className="bg-orange-400 justify-self-center  ">2</div>
      <div className="bg-yellow-400    ">3</div>
      <div className="bg-red-400   ">4</div>
      <div className="bg-green-400   ">55555555555555555555555555555555555</div>
      <div className="bg-blue-400   ">6</div>
    </main>
  );
}

// self-center for vertical allignment
// justify-self-center for horizotal allignment
