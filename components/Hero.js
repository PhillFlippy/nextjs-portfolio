import { useState, useEffect } from "react";
import { TextLoop } from "react-text-loop-next";
import ReactTextTransition, { presets } from "react-text-transition";

export default function Hero() {
  const [fedIndex, setFedIndex] = useState(0);
  const [bedIndex, setBedIndex] = useState(0);

  const fed = ["React", "Typescript", "Javascript"];
  const bed = ["Node", ".NET", "AWS"];
  useEffect(() => {
    let fedInterval = setInterval(() => {
      if (fed.length - 1 === fedIndex) {
        setFedIndex(0);
      } else {
        setFedIndex(fedIndex + 1);
      }
    }, 3000);
    return () => {
      clearInterval(fedInterval);
    };
  }, [fedIndex]);
  useEffect(() => {
    let bedInterval = setInterval(() => {
      if (bed.length - 1 === bedIndex) {
        setBedIndex(0);
      } else {
        setBedIndex(bedIndex + 1);
      }
    }, 3700);
    return () => {
      clearInterval(bedInterval);
    };
  }, [bedIndex]);
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-full fill-screen m-auto md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <div>
          <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
            {fed[fedIndex]}
          </h1>
        </div>
        <div>
          <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
            {bed[bedIndex]}
          </h1>
        </div>
        <div>
          <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
            Developer.
          </h1>
        </div>
      </div>
      {/* Image container */}
      {/* <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
          <img src={userData.avatarUrl} alt="avatar" className=" shadow" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
