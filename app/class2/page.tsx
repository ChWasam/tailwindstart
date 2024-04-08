import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex bg-lime-500  mx-auto  m-4 gap-4 max-w-7xl"> 
        <div className="min-h-[100px] rounded-lg bg-blue-200 p-4 bg-gradient-to-t from-red-500 to-indigo-500 ">
          <h1 className="tracking-wider leading-10">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            minima Lorem ipsum dolor sit amet consectetur "
          </h1>
          <p className=" text-gray-400 underline">-Lorem, ipsum.</p>
        </div>
        <div className="min-h-[100px] rounded-lg  bg-blue-200 p-4 bg-gradient-to-t from-yellow-500 to-green-500 ">
          <h1>"Lorem ipsum dolor sit amet consectetur adipisicing"</h1>
          <p className=" text-gray-400 italic">-Lorem, ipsum.</p>
        </div>
        <div className="min-h-[100px] rounded-lg  bg-blue-200 p-4 bg-gradient-to-t from-blue-500 to-orange-500">
          <h1>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            minima Lorem ipsum dolor sit amet."
          </h1>
          <p className=" text-gray-400 uppercase">-Lorem, ipsum.</p>
        </div>
      </div>
    </main>
  );
}

// gap-4 matlab div ka andar jo different divs han aun ka darmiyan spacing
// max-w-4xl we can define the max width
//mx-auto  This class sets both left and right margins to auto, which effectively centers the element horizontally
// tracking-wider  spaces between letters
// leading-10 spaces between lines
// underline
// italic
//uppercase
// bg-gradient-to-t from-red-500 to-indigo-500
