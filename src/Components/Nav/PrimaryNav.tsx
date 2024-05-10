import { BsGithub } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

function PrimaryNav() {
  return (
    <>
      <header className="bg-secondary-background py-4">
        <nav className="w-[1024px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#!" target="_blank" rel="noopener noreferrer">
              <BsGithub className="text-[0.7rem]" />
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer">
              <GrFacebookOption className="text-[0.7rem]" />
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-[0.7rem]" />
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-[0.7rem]" />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-3">
              <FaPhoneAlt className="text-[0.8rem]" />
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
