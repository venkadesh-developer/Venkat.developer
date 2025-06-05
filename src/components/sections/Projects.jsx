import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full flex items-center justify-center py-10"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-sky-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Gemini Clone</h3>
              <p className="text-gray-400 mb-4">
                Developed a responsive front-end application replicating the Gemini AI interface using the Gemini API. Designed an intuitive UI for seamless user interaction and optimized for various devices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "JavaScript", "Bootstrap", "Responsive Design", "API Integration"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-sky-500/10 text-sky-500 py-1 px-3 rounded-full text-sm hover:bg-sky-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Venkadesh-11/Gemini-clone-React"
                  className="text-sky-400 hover:text-sky-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div
              className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-sky-400 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Company Website Development – Manvian Internship</h3>
              <p className="text-gray-400 mb-4">
                Developed and maintained a responsive company website using React.js and Tailwind CSS to improve user experience and accessibility across devices. Actively collaborated with the development team, contributed to key frontend tasks, and worked on real-time internship projects as a fresher React developer.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React","Tailwind CSS", "Responsive Design"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-sky-500/10 text-sky-500 py-1 px-3 rounded-full text-sm transition hover:bg-sky-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                {/* <a
                  href="#"
                  className="text-sky-400 hover:text-sky-300 transition-colors my-4"
                >
                  View Project →
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
