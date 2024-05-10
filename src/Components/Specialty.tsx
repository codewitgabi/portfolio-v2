import Hr from "../assets/hr.png";

function Specialty({
  img,
  specialty,
  description,
  className,
}: {
  img: string | undefined;
  specialty: string;
  description: string;
  className?: string;
}) {
  return (
    <>
      <div
        className={`bg-secondary-background flex flex-col justify-center items-center text-center gap-2 p-8 rounded-sm ${className}`}
      >
        <img src={img} alt="specialty-img" className="" />
        <p className="">{specialty}</p>
        <img src={Hr} alt="divider" className="" />
        <span className="text-slate-500 text-[0.75rem]">{description}</span>
      </div>
    </>
  );
}

export default Specialty;
