import Image from "next/image";

function Person({ name, photo, title }) {
  return (
    <li>
      <div className="flex items-center space-x-4 lg:space-x-6">
        <Image
          className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
          src={photo}
          width="60px"
          height="60px"
          alt=""
        />
        <div className="font-medium text-lg leading-6 space-y-1">
          <h3>{name}</h3>
          <p className="text-indigo-600">{title}</p>
        </div>
      </div>
    </li>
  );
}

export default function Team() {
  return (
    <div className="bg-gray-50	">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Meet our team
            </h2>
            <p className="text-xl text-gray-500">
              We've worked on browser dev tools, JS engines, Kubernetes, Docker,
              Babel, VS Code.
            </p>
            <p className="text-xl text-gray-500">
              Debugging has not changed since the 70s. It's still print
              statements all the way down.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              <Person
                name="Jason Laster"
                title="Co-Founder / CEO"
                photo="/jason.jpeg"
              ></Person>

              <Person
                name="Brian Hackett"
                title="Co-Founder / CTO"
                photo="/brian.jpeg"
              ></Person>

              <Person
                name="Kannan Vijayan"
                title="Recording + Replaying"
                photo="/kannan.png"
              ></Person>
              <Person
                name="Logan Smyth"
                title="Debugging lead"
                photo="/logan.png"
              ></Person>

              <Person
                name="Jaril Valenciano"
                title="Debugging experience"
                photo="/jaril.png"
              ></Person>

              <Person
                name="Holger Benl"
                title="Frontend"
                photo="/holger.png"
              ></Person>

              <Person
                name="Dan Miller"
                title="Tooling and DX"
                photo="/dan.jpeg"
              ></Person>

              <Person
                name="Jon Bell"
                title="Design and UX"
                photo="/jon.jpeg"
              ></Person>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
