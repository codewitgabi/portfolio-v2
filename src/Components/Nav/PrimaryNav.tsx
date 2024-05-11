import { BsGithub } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocalPhone } from "react-icons/md";

function PrimaryNav() {
  return (
    <>
      <header className="bg-secondary-background py-4">
        <nav className="w-[1024px] mx-auto flex items-center justify-between max-[1070px]:w-[initial] max-[1070px]:mx-[1.5em]">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/codewitgabi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="text-[0.7rem] hover:text-green-cool transition-all duration-300" />
            </a>
            <a
              href="https://www.facebook.com/codewitgabi.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrFacebookOption className="text-[0.7rem] hover:text-green-cool transition-all duration-300" />
            </a>
            <a
              href="https://twitter.com/codewitgabi1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-[0.7rem] hover:text-green-cool transition-all duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/codewitgabi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-[0.7rem] hover:text-green-cool transition-all duration-300" />
            </a>
          </div>
          <div className="flex items-center gap-4 max-[730px]:hidden">
            <span className="flex items-center gap-3">
              <MdOutlineLocalPhone className="text-[1rem]" />
              <span className="text-[0.8rem]">+234 902 061 7734</span>
            </span>
            <span className="flex items-center gap-3">
              <AiOutlineMail className="text-[1rem]" />
              <span className="text-[0.8rem]">codewitgabi222@gmail.com</span>
            </span>
            <span className="flex items-center gap-3">
              <IoLocationOutline className="text-[1rem]" />
              <span className="text-[0.8rem]">Talba road, Gidan Kwano</span>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default PrimaryNav;
