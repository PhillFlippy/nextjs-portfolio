import { useState, useEffect } from "react";

export default function Hero() {
  const [typesIndex, setTypes] = useState(0);
  const devTypes = [
    "Full Stack",
    "React",
    "Typescript",
    "Javascript",
    ".Net",
    "Node",
    "AWS",
    "Vue",
    "React Native",
    "Cordova",
    "Agile",
  ];

  useEffect(() => {
    let typeInterval = setInterval(() => {
      if (devTypes.length - 1 === typesIndex) {
        setTypes(0);
      } else {
        setTypes(typesIndex + 1);
      }
    }, 3000);
    return () => {
      clearInterval(typeInterval);
    };
  }, [typesIndex]);

  return (
    <>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="flex flex-row justify-center items-start overflow-hidden">
        <div className="w-full fill-screen m-auto md:w-1/2 mx-auto heading-margin-top md:text-left lg:p-20">
          <div>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2 text-center heading-margin-top">
              {devTypes[typesIndex]} Developer
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
