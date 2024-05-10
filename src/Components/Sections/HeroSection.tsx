import { MdOutlineFileDownload } from "react-icons/md";
import GradientButton from "../GradientButton";
import Avatar from "../../assets/avatar.png";

function HeroSection() {
  return (
    <>
      <section className="mt-[5em]" id="home">
        <div className="w-[1024px] mx-auto grid grid-cols-2 gap-4">
          <div className="">
            <h3 className="text-[1.5rem] font-leagueScript text-green-cool font-black">
              Backend Developer
            </h3>
            <h2 className="text-[1.5rem] text-green-cool">
              Gabriel Michael Ojomakpene
            </h2>
            <p className="mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              enim, sit quidem est inventore consectetur et fugit accusantium
              iure quae? Recusandae obcaecati delectus cupiditate incidunt, quis
              corporis illum! Velit error, ut vero reprehenderit modi recusandae
              blanditiis officia, quae doloremque at harum dicta porro ex.
              Expedita amet vitae numquam porro voluptas.
            </p>

            <div className="flex items-center gap-6 mt-8">
              <GradientButton text="Discuss for projects" />
              <a
                href="#!"
                className="bg-gradient-to-r from-[#194BFD] to-[#AD13FB] text-[0.85rem] rounded-full py-2 px-4 flex items-center gap-2 w-max"
              >
                <span>Download Resume</span>
                <MdOutlineFileDownload className="text-lg" />
              </a>
            </div>
          </div>
          <div className="">
            <img src={Avatar} alt="avatar" className="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
