import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-[auto,auto,1fr] h-screen w-screen gap-1">
      <div className="bg-teal-400  ">111111111111111111111111</div>
      <div className="bg-orange-400  ">2</div>
      <div className="bg-yellow-400   ">3</div>
      <div className="bg-red-400   ">4</div>
      <div className="bg-green-400   ">55555555555555555555555555555555555</div>
      <div className="bg-blue-400   ">6</div>
      <div className="bg-amber-500   ">7</div>
    </main>
  );
}

// complete screen can be divided into 12 rows and 12 colums with diffent height
// when you write grid word in className  1 column got created
// grid-flow-row yeh bydefault hoti ha
//grid-col-3 matlab 3 col bana do 
// grid-col-[auto,auto,auto] adjust column width as per content
// lakin thori space bachti ha
// grid-col-[auto,auto,1 fr] is me pehla do ko pora pora bas content ka mutabiq hi space milti ha 
// 100 pc of space left 3rd column ko mil gae
// fr=fraction
// kisi ak div ke allignment karni ho ge to self use kar lain ga
