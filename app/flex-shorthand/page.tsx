import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-purple-300 h-screen w-screen">
      <div className=" flex justify-center  my-auto  gap-x-4">
        <div className="flex flex-col p-8 bg-slate-50 rounded-lg basis-0 flex-grow  flex-shrink  shadow-lg ">
          <h1 className=" text-2xl font-bold"> Standard</h1>
          <p className="text-gray-300 mb-4 flex-grow ">
            Monthly Plan Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Nemo placeat amet reiciendis praesentium ipsa harum aperiam
            impedit corrupti mollitia dolore eveniet, vitae voluptas, et esse
            aliquid repellat necessitatibus voluptatibus alias?
          </p>
          <h2 className=" text-3xl font-bold mx-auto">$25</h2>
        </div>

        <div className=" flex flex-col p-8 bg-red-500 rounded-lg basis-0  flex-grow flex-shrink  shadow-lg ">
          <h1 className="text-white text-2xl  font-bold"> Popular</h1>
          <p className="text-white mb-4 flex-grow">
            Monthly Plan Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Quaerat eum pariatur rem molestias?
          </p>
          <h2 className="text-white text-3xl font-bold mx-auto">$40</h2>
        </div>

        <div className=" flex flex-col bg-slate-50 rounded-lg basis-0  flex-grow  flex-shrink shadow-lg p-8">
          <h1 className=" text-2xl font-bold"> Premium</h1>
          <p className="text-gray-300 mb-4 flex-grow">
            Monthly Plan Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laudantium porro quibusdam, dicta nesciunt ullam aliquam quos
            nam voluptas in natus quaerat eius pariatur quas totam veniam
            praesentium ea deleniti repellendus earum ducimus obcaecati soluta,
            magnam eum optio? Aliquid, reiciendis repellat.
          </p>
          <h2 className=" text-3xl font-bold mx-auto ">$55</h2>
        </div>
      </div>
    </main>
  );
}

// we can use flex-auto instead of flex-grow flex-shrink basis-auto
// basis-0 and flex-shrink-0 won't work together

//basis-auto ==> content ka hisab sa jagha occupy karta ha
//basis-0   ==>  equal space lata han

// justify-center and item-center sometimes don't work use mx-auto and my-auto instead 

// flex-grow flex-shrink basis mx-auto yeh sab hild pa lagta ha aur in ka parent div pa flex use karna zarori ha

//  Tailwind Class        CSS Property& Value          Explanation

// flex-1                 flex: 1 1 0%;                Flex item grows and shrinks as needed ignoring the initial size. If this is used on multiple items, all the items take up equal space.

// flex-[50%]              flex: 1 1 50%;

// flex-auto               flex: 1 1 auto;            Flex item grows and shrinks as needed considering the initial size. If this is used on multiple items, all the items take up space based on their content.

//flex-initlal             flex: 0 1 auto;            This is the default. The item shrinks when space is less but does not grow when there's space available. Initial size is auto-calculated.

// flex-none               flex: none;                The item does not grow, nor shrink.
