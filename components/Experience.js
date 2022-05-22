export default function Experience() {
    const experience = [
        {
            title: "Software Developer",
            company: "Mudbath Digital",
            year: "2020",
            companyLink: "https://www.mudbath.com.au/",
            desc: "Working across many different tech stacks, I also consulted inside our clients teams, which included The Greater Bank and NIB.",
          },
          {
            title: "Junior Web and Integration Developer",
            company: "The University of Newcastle",
            year: "2018",
            companyLink: "https://www.newcastle.edu.au/m",
            desc: "Primarily worked inside the myUON app working with ReactJS and .Net. I also tech lead and mentored grad developers.",
          },        {
            title: "Grad Junior Web and Integration Developer",
            company: "The University of Newcastle",
            year: "2016",
            companyLink: "https://www.newcastle.edu.au/",
            desc: "Worked on many .Net and ReactJS projects",
          },      
          {
            title: "Freelance Web Developer",
            company: "Self",
            year: "2016",
            companyLink: "www.PhillipEade.com",
            desc: "Worked on a few freelance projects for people and startups, I had to both manage the projects and develop the architecture from scratch.",
          },   
          {
            title: "Student",
            company: "Master of IT - Univeristy of Newcastle",
            year: "2016",
          },        {
            title: "Student",
            company: "Bachelor of Computer Science - University of Newcastle",
            year: "2007",
          },
    ]
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};