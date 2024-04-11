import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex items-center justify-center bg-gray-300 w-screen h-screen">
      <div className=" p-4 max-w-[800px]  bg-slate-50 rounded-lg shadow-lg">
        <div className="flex items-center even:flex-row-reverse even:text-right">
          <div className="m-4 h-[140px] w-[180px] ">
            <Image
              src={
                "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div>
            <h1 className=" font-bold ">Lorem, ipsum.</h1>
            <h2 className=" mt-1 text-gray-400">Lorem, ipsum dolor.</h2>
            <p className="mt-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              aperiam vel velit unde facere iusto maiores cumque a in dolore!
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div className=" flex  items-center even:flex-row-reverse even:text-right">
          <div className=" m-4 h-[140px] w-[180px]">
            <Image
              src={
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <h1 className=" font-bold ">Lorem, ipsum.</h1>
            <h2 className=" mt-1 text-gray-400">Lorem, ipsum dolor.</h2>
            <p className="mt-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              aperiam vel velit unde facere iusto maiores cumque a in dolore!
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div className="flex items-center even:flex-row-reverseeven:text-right">
          <div className="m-4 h-[140px] w-[180px] ">
            <Image
              src={
                "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div>
            <h1 className=" font-bold ">Lorem, ipsum.</h1>
            <h2 className=" mt-1 text-gray-400">Lorem, ipsum dolor.</h2>
            <p className="mt-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              aperiam vel velit unde facere iusto maiores cumque a in dolore!
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div className=" flex  items-center even:flex-row-reverse even:text-right">
          <div className=" m-4 h-[140px] w-[180px]">
            <Image
              src={
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <h1 className=" font-bold ">Lorem, ipsum.</h1>
            <h2 className=" mt-1 text-gray-400">Lorem, ipsum dolor.</h2>
            <p className="mt-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              aperiam vel velit unde facere iusto maiores cumque a in dolore!
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

// TAILWIND CLASSES TO BE DISCUSSED:
// flex-row-reverse

// MODIFIERS:
// even:

// odd:

// first:

// last:
