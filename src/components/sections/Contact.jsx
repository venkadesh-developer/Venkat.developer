import { RevealOnScroll } from "../RevealOnScroll";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa"; // Import icons

export const Contact = () => {
  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center py-10">
      <RevealOnScroll>
        <div className="text-center">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Connect With Me 
          </h2>

          {/* Icons Row with Tooltips */}
          <div className="flex justify-center space-x-6">
            {/* Email */}
            <div className="relative group">
              <a href="mailto:venkadesh1102@gmail.com" className="text-white text-3xl hover:text-blue-400 transition">
                <FaEnvelope />
              </a>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Email
              </span>
            </div>

            {/* LinkedIn */}
            <div className="relative group">
              <a href="https://www.linkedin.com/in/venkadesh-developer/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-400 transition">
                <FaLinkedin />
              </a>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                LinkedIn
              </span>
            </div>

            {/* GitHub */}
            <div className="relative group">
              <a href="https://github.com/Venkadesh-11" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-400 transition">
                <FaGithub />
              </a>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                GitHub
              </span>
            </div>

            {/* Resume */}
            <div className="relative group">
              <a href="https://drive.google.com/file/d/1jXSZIDYpBpEr7O16e9kgUHv9E8_BeUuO/view?usp=sharing" download className="text-white text-3xl hover:text-blue-400 transition">
                <FaFileDownload />
              </a>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Resume
              </span>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
