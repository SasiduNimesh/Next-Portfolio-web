import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20 w-full px-[12%] py-10 scroll-mt-20">
      {/* Top Section */}
      <div className="text-center py-6">
        <h2 className="text-2xl font-bold cursor-pointer mb-4">
          <span className="text-sky-700">S</span>.Nimesh
        </h2>
        <div className="w-max flex items-center gap-2 mx-auto mt-2 text-gray-700">
          <FaEnvelope className="w-5 h-5" />
          <a
            href="mailto:sasindunimeshsnb99@gmail.com"
            className="hover:text-sky-700 duration-300"
          >
            sasindunimeshsnb99@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t-2 border-gray-900 px-[10%] py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <p className="mb-4 sm:mb-0">
          © 2025 S.Nimesh. All rights reserved.
        </p>
        <ul className="flex items-center gap-8">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
              className="hover:text-sky-700 duration-300"
            >
              <FaGithub className="w-4" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
              className="hover:text-sky-700 duration-300"
            >
              <FaLinkedin className="w-4" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
