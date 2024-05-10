import EmailSpecialtyImg from "../../assets/email_specialty.png";
import StoreFrontImg from "../../assets/storefront.png";
import QueryStatsImg from "../../assets/query_stats.png";
import Specialty from "../Specialty";

const specialties = [
  {
    img: EmailSpecialtyImg,
    specialty: "Frontend Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus numquam temporibus, molestiae nisi cupiditate illo sint voluptatibus ipsum omnis quasi!",
  },
  {
    img: StoreFrontImg,
    specialty: "Backend Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus numquam temporibus, molestiae nisi cupiditate illo sint voluptatibus ipsum omnis quasi!",
  },
  {
    img: QueryStatsImg,
    specialty: "Fullstack Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus numquam temporibus, molestiae nisi cupiditate illo sint voluptatibus ipsum omnis quasi!",
  },
];

function SpecialtySection() {
  return (
    <>
      <section className="mt-[5em]" id="specialty">
        <div className="w-[1024px] mx-auto">
          <div className="flex items-center justify-center flex-col gap-2">
            <h4 className="uppercase text-[0.7rem] text-slate-500 tracking-widest">
              Specialty
            </h4>
            <h2 className="flex items-center gap-2 text-2xl">
              <span>My</span>
              <span className="text-green-cool">Specialties</span>
            </h2>
            <p className="w-[300px] text-center text-[0.85rem] text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              blanditiis ipsum ducimus fugiat laudantium nam?
            </p>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-6">
            {specialties.map((specialty) => {
              return (
                <Specialty
                  img={specialty.img}
                  specialty={specialty.specialty}
                  description={specialty.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default SpecialtySection;
