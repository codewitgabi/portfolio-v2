import { MdOutlineFileDownload } from "react-icons/md";
import GradientButton from "../GradientButton";
import Avatar from "../../assets/avatar.png";

const API_ROOT = import.meta.env.VITE_API_ROOT;

function HeroSection() {
  return (
    <>
      <section className="mt-[5em]" id="home">
        <div className="w-[1024px] mx-auto grid grid-cols-2 gap-4 max-[1070px]:w-[initial] max-[1070px]:mx-[1.5em] max-[795px]:grid-cols-1 max-[795px]:gap-20">
          <div className="">
            <h3 className="text-[1.5rem] font-leagueScript text-green-cool font-black">
              Fullstack Developer
            </h3>
            <h2 className="text-[1.5rem] text-green-cool">
              Gabriel Michael Ojomakpene
            </h2>
            <p className="mt-4 text-slate-400">
              I am a seasoned fullstack developer proficient in{" "}
              <em className="text-green-cool">Python</em> and{" "}
              <em className="text-green-cool">Node.js</em>. With{" "}
              <em className="text-green-cool font-bold text-xl">2+</em> years of
              experience, I specialize in crafting robust and scalable
              solutions, from optimizing database performance to architecting
              complex API systems. So, whether you're a startup looking to make
              your mark or an established enterprise seeking to innovate, I
              invite you to explore the possibilities together. Let's embark on
              a journey of digital transformation, where every line of code we
              write brings us closer to your vision of success. Welcome to my
              digital space, where innovation meets expertise, and where your
              digital aspirations find their perfect ally.
            </p>

            <div className="flex items-center gap-6 mt-8 max-[375px]:flex-col">
              <GradientButton
                text="Discuss for projects"
                className="max-[375px]:w-full max-[375px]:text-center"
                href="mailto:codewitgabi222@gmail.com"
              />
              <a
                href={`${API_ROOT}/resume`}
                className="bg-gradient-to-r from-[#194BFD] to-[#AD13FB] text-[0.85rem] rounded-full py-2 px-4 flex items-center gap-2 w-max max-[375px]:w-full max-[375px]:justify-center"
                target="_blank"
                rel="noopener noreferrer"
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
