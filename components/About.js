export default function AboutMe() {
  return (
    <section className="bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <div
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            Senior Full Stack Developer. Currently working on{" "}
          </div>
        </div>
      </div>
      <div className="bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <div className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href={"mailto:phillemail89@gmail.com"}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{" "}
                and I&apos;ll get back. I swear.
              </div>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href="https://twitter.com/EadePhill"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href="https://github.com/PhillFlippy"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg  font-mono relative overflow-hidden text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href="https://www.linkedin.com/in/phillip-eade/"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={"https://www.instagram.com/phillip_eade/"}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">
              Hello there! I am a senior full stack software developer living in
              the beautiful city of Newcastle, Australia.
              <br />
              <br />
              I have over 5 years of experience, working across a wide range of
              technology stacks and business areas. This includes education,
              banking and insurance. Through this I have also gained extensive
              experience working inside of agile teams, mostly in an agile
              environment but also in a Kanban agile team. Throughout my career
              I have had the opportunity to successfully tech lead projects,
              getting to decide what direction the architecture will go and
              managing stakeholders.
              <br />
              <br /> I also have a passion for teaching others, jumping on any
              chance to mentor more junior developers.
              <br />
              <br />
              My primary stack is React front end with a .Net backend but I have
              worked with a lot of different programming languages and I have
              become pretty good at picking up new ones, so I am pretty
              comfortable with learning something new for the project.
            </div>
            <div className="bg-gray-700 rounded-lg my-16">
              <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50 my-3 mt-8">
                Tech Stack
              </h1>
              <div className="flex flex-row flex-wrap mt-8">
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg"
                  className="h-20 w-20 mx-4 my-4"
                />{" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                  className="h-20 w-20 mx-4 my-4"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
