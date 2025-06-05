import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "JavaScript",
    "CSS",
    "HTML",

  ];

  const backendSkills = ["Java", "Oracle SQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all hover:border-sky-400">
            <p className="text-gray-300 mb-6">
              Aspiring React Developer with practical internship experience, focused on crafting dynamic and responsive web interfaces.
              Dedicated to delivering efficient front-end solutions and enhancing user experiences.
              Eager to contribute technical expertise and grow within a collaborative, innovative, and fast-paced development environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-sky-400">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor of Engineering in Electronics and Communication Engineering </strong> - Jeppiaar Engineering College , Chennai
                  (2020-2024)
                </li>

              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-sky-400">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Frontend Developer Intern at Manvian Group (March 2025 - May 2025){" "}
                  </h4>
                  <p>
                    Designing and implementing responsive user interfaces using React, optimizing website performance, and collaborating on UI/UX improvements for a seamless user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-5 hover:border-sky-400 ">
            <h3 className="text-xl font-bold mb-4">📜 Certifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Frontend Development Internship Certificate</strong>  – Manvian Group
              </li>
              <li>
                <strong> JavaScript Certification </strong> – HackerRank
              </li>
              <li>
                <strong>CSS Certification</strong> – HackerRank
              </li>
              <li>
                <strong> SQL Certification </strong> – HackerRank
              </li>
              <li>
                <strong> Java Certification </strong> – Great Learnings
              </li>
              <li>
                <strong>Network Essentials</strong> –  Cisco Networking Academy

              </li>
              <li>
                <strong>Foundations of Cloud Edge ML</strong> – NPTEL
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
