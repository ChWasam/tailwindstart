import React from "react";

function page() {
  return (
    <main className="grid bg-red-100 text-white h-screen w-screen grid-cols-[minmax(auto,18rem)] md:grid-cols-[repeat(3,minmax(auto,18rem))]  justify-center content-center gap-10">
      <div className="flex flex-col  bg-red-500 rounded-lg p-6  ">
        <h1 className="text-4xl">Standard</h1>
        <p>Monthly Plan</p>
        <span>$25</span>
      </div>
      <div className="flex flex-col bg-red-500 rounded-lg p-6">
        <h1 className="text-4xl">Standard</h1>
        <p>Monthly Plan</p>
        <span>$25</span>
      </div>
      <div className="flex flex-col bg-red-500  rounded-lg p-6 ">
        <h1 className="text-4xl">Standard</h1>
        <p>Monthly Plan</p>
        <span>$25</span>
      </div>
    </main>
  );
}

export default page;

{
  /*  1fr (jitni available space ho ge wo la lai ga ) */
}
// md:grid-cols-[repeat(3,minmax(auto,18rem))] 
// bydefault grid-cols-1 ka matlab hota ha md:grid-cols-[repeat(3,minmax(0,1fr))] 
