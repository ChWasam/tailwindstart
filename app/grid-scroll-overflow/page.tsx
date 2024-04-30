import React from "react";

function page() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr),24rem] h-screen gap-x-4   ">
      <div>
        <h1 className="text-2xl font-bold">Hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          voluptates?
        </p>
        <button className=" • bg-red-500 px-3 py-1 text-white">Click me</button>
        <pre className="text-sm overflow-scroll  py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          perspiciatis possimus cumque dolorem asperiores quae voluptatibus
          necessitatibus odit modi qui aliquid debitis sint? Optio dolor eos
          eiusi. Porro corporis aut incidunt perspiciatis architecto similique
          fugit non recusandae nobis, obcaecati, omnis voluptatem ad. Tempore,
          ratione architecto at laudantium, facilis asperiores enim molestias
          expedita deserunt ipsam odio neque labore dolor ab esse non fugit quos
          aliquid quam ex culpa, beatae consequatur voluptate quas. Magnam,
          adipisci tempora! Dolorum.
        </pre>
      </div>

      <div className="bg-red-400">
        <h3>Side bar</h3>
        <ul>
          <li> 121</li>
          <li>32432</li>
          <li>234324</li>
        </ul>
      </div>
    </div>
  );
}

export default page;

//  yahan grid-cols-[minmax(auto,1fr),24rem]  auto ke jagha minimum width zero kar dain ga
//  ku kah auto me to yeh text pori line pa chala jai ga ku kah content ka mutabiq jagha gherta ha
