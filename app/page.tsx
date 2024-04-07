import Image from "next/image";

export default function Home() {
  return (
<main>
<div className="grid gap-2 m-5 sm:grid-cols-12   ">
  <div className=" bg-green-500 min-h-[100px] shadow-lg rounded sm:col-span-3 sm:block hidden  "></div>
  <div className=" bg-orange-500 min-h-[100px] shadow-lg rounded md:col-span-6 sm:col-span-9"></div>
  <div className=" bg-purple-500 min-h-[100px] shadow-lg rounded sm:col-span-3 md:block hidden"></div>
</div>

</main>
  );
}
