import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-white h-screen w-screen">
      <div className=" flex flex-col items-end gap-y-6 w-[400px] bg-slate-50 rounded-lg shadow-2xl   ">
        <Image
          className="m-auto h-[400px] w-[400px]"
          src={
            "https://images.pexels.com/photos/17948350/pexels-photo-17948350/free-photo-of-woman-with-jewellery-on-her-face.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          width={1000}
          height={1000}
        />
        <span className="text-teal-700 font-extrabold text-3xl ">$220</span>
        <h2 className="text-black font-bold text-3xl ">
          Comfort Grey Sneakers
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cum
          impedit veniam Add to Cart
        </p>
        <button className=" bg-teal-700 p-3 self-start  rounded-md ">
          Add to cart{" "}
        </button>
      </div>
    </main>
  );
}

// Check button
// look for items-end in top div
// look for    self-end    in button

// flex will do changes in all the divs
// if want to so something different in one particular div then use self for that particular div
