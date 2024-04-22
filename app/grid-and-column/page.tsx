import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-[auto,auto,1fr] h-screen w-screen gap-1">
      <div className="bg-teal-400  ">111111111111111111111111</div>
      <div className="bg-orange-400  ">22222222222222</div>
      <div className="bg-yellow-400   ">3</div>
      <div className="bg-red-400 row-start-2 col-start-2    ">444444444444444444444444</div>
      <div className="bg-green-400   ">55555555555555555555555555555555555</div>
      <div className="bg-blue-400   ">6</div>
      <div className="bg-amber-500 col-start-2 col-end-4   ">7</div>
    </main>
  );
}

// Here i want to move 7 to 8
// for this the class i will apply is col-start-2  on 7
// agar me isa 8 aur 9 dono pa lana chahta ho me  col-start-2 col-end-4 or we can use col-start-2 col-span-2
// col-span-full  jitna bhi col bana hua hana sab ke width la lai ga

// we can designate row as well row-start-3 yeh 7 ke jagh a jai ga aur 7 ak step pecha chala jai ga
