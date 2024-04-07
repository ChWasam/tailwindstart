import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-gray-200 p-20 ">
        <div className="flex justify- rounded-full p-2 bg-slate-50">
          <div className="p-2 bg-gray-200 rounded-full px-6 hover:bg-blue-500 hover:rounded-full hover:text-white ">
            profile
          </div>
          <div className="p-2 bg-gray-200 rounded-full px-6 hover:bg-blue-500 hover:rounded-full hover:text-white ">
            Notifications
          </div>
          <div className="p-2 bg-gray-200 rounded-full px-6 hover:bg-blue-500 hover:rounded-full hover:text-white ">
            Payment
          </div>
          <div className="p-2 bg-gray-200 rounded-full px-6 hover:bg-blue-500 hover:rounded-full hover:text-white ">
            Settings
          </div>
        </div>
      </div>
    </main>
  );
}

// justify between left ko right  ko extreme left aur right pa kar data ha ur baqio ko equal spaces me divide kar data ha
// jutify around har item ka left aur right pa equal spacing data ha
// justify evenly tamam elements ke equal space
