import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-[auto,auto,auto] h-screen w-screen gap-1">
      <div className="bg-teal-400  ">111111111111111111111111</div>
      <div className="bg-orange-400  ">2222222222222222222222 </div>
      <div className="bg-yellow-400   ">3333333333333333333333</div>
      <div className="bg-red-400     ">444444444444444444444444</div>
      <div className="bg-green-400 row-start-1 col-start-1 row-span-2 mr-5 mb-5   ">
        5555555555555555555555555555
      </div>
      <div className="bg-blue-400 row-start-3 col-start-1   ">
        666666666666666666666666666
      </div>
      <div className="bg-amber-500 col-start-1 row-start-1 row-span-3 z-[-20]  ">
        7777777777777777777777
      </div>
    </main>
  );
}
