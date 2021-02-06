import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

let images = ["/play-view.jpg", "/debug-view.jpg"];

function Circle({ id, selectedImg, setSelectedImg }) {
  const bg = id == selectedImg ? "bg-gray-400" : "bg-gray-700";
  return (
    <a
      onClick={() => setSelectedImg(id)}
      className={`rounded-xl w-4 h-4 mx-2  z-10 hover:bg-gray-400 cursor-pointer ${bg}`}
    ></a>
  );
}

export default function Carousel({ setShowVideo }) {
  const [selectedImg, setSelectedImg] = useState(0);
  let intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSelectedImg((selectedImg + 1) % 2);
    }, 10000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [selectedImg]);

  return (
    <div
      className="max-w-5xl mx-auto rounded-lg "
      style={{ boxShadow: "0px 0px 10px #b0b7bd", cursor: "pointer" }}
    >
      <Image
        className="relative rounded-lg"
        src={images[selectedImg]}
        alt="App screenshot"
        width={1035}
        height={571}
        onClick={(e) => {
          setShowVideo(true);
          e.preventDefault();
        }}
      />
      <div className="flex justify-center	py-4">
        <Circle
          id={0}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
        <Circle
          id={1}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      </div>
    </div>
  );
}
