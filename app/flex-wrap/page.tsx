import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-200 p-80">
      <div className="flex flex-wrap rounded-xl text-center p-8 bg-white justify-around max-w-[800px]  mx-auto">
        <div>
          <Image
            className="h-32 w-32 rounded-full object-cover object-top "
            src={
              "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            alt=""
            width={1000}
            height={1000}
          />
          <h1 className=" mt-2">Wasam</h1>
          <p className="text-gray-400">Lorem, ipsum dolor.</p>
        </div>
        <div>
          <div className="p-1 h-32 w-32 rounded-full bg-gradient-to-t from-red-500 to-yellow-500 ">
            <Image
              className="h-full w-full  rounded-full object-cover object-top"
              src={
                "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <h1 className="mt-2">Ali</h1>
          <p className="text-gray-400">Lorem, ipsum dolor.</p>
        </div>

        <div>
          <Image
            className="h-32 w-32 rounded-full object-cover object-top "
            src={
              "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            alt=""
            width={1000}
            height={1000}
          />
          <h1 className=" mt-2">Wasam</h1>
          <p className="text-gray-400">Lorem, ipsum dolor.</p>
        </div>
        <div>
          <Image
            className="h-32 w-32 rounded-full object-cover object-top"
            src={
              "https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            alt=""
            width={1000}
            height={1000}
          />
          <h1 className="mt-2">Adnan</h1>
          <p className="text-gray-400">Lorem, ipsum dolor.</p>
        </div>

        <div>
          <Image
            className="h-32 w-32 rounded-full object-cover object-top "
            src={
              "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            alt=""
            width={1000}
            height={1000}
          />
          <h1 className=" mt-2">Wasam</h1>
          <p className="text-gray-400">Lorem, ipsum dolor.</p>
        </div>
        <div>
          <Image
            className=" h-32 w-32 rounded-full object-cover object-top"
            src={
              "https://images.pexels.com/photos/1288171/pexels-photo-1288171.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            alt=""
            width={1000}
            height={1000}
          />
          <h1 className="mt-2">Usama</h1>
          <p className="text-gray-400">Lorem, ipsum dolor.</p>
        </div>
      </div>
    </main>
  );
}

// Flex-wrap   Items are wrapped into the next line if needed
// Flex-no-wrap  Items are not wrapped even if it causes overflow
// flex-wrap-reverse   Items are wrapped in the reverse direction

//  How to make second pic look like instagram story

{
  /* <Image
className="rounded-full"
src={'https://images.pexels.com/photos/1288171/pexels-photo-1288171.jpeg?auto=compress&cs=tinysrgb&w=800'}
alt=""
width={150}
height={150}
/> */
}

// configuration in next.config.mjs file
// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "images.pexels.com",
//           port: "",
//           pathname: "/photos/**",
//         },
//       ],
//     },
//   };

// object-contain

//  object-cover and object-top

// flex by default (main axis(vertical) , cross axis(horizontal) )
// main axis ke allignment justify sa hoti ha
// cross axis  ke allignment hoti ha item sa

//item-stretch by default


