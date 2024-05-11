function AboutSection() {
  return (
    <>
      <div className="mt-[5em]" id="about">
        <div className="w-[1024px] mx-auto max-[1070px]:w-[initial] max-[1070px]:mx-[1.5em]">
          <div className="flex items-center justify-center flex-col gap-2">
            <h4 className="uppercase text-[0.7rem] text-slate-500 tracking-widest">
              About me
            </h4>
            <h2 className="flex items-center gap-2 text-2xl">
              <span>My</span>
              <span className="text-green-cool">Work Process</span>
            </h2>
            <p className="w-[300px] text-center text-[0.85rem] text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              blanditiis ipsum ducimus fugiat laudantium nam?
            </p>
          </div>

          <div className="mt-16 grid grid-cols-6 gap-6 relative max-[950px]:grid-cols-3 max-[725px]:grid-cols-2 max-[375px]:grid-cols-1">
            <div className="border-t border-b border-green-cool flex items-center justify-center h-[100px] bg-secondary-background rounded-sm">
              <span>Empathize</span>
            </div>
            <div className="border-t border-l border-green-cool flex items-center justify-center h-[100px] bg-secondary-background rounded-sm">
              <span>Define</span>
            </div>
            <div className="border-l border-b border-green-cool flex items-center justify-center h-[100px] bg-secondary-background rounded-sm">
              <span>Ideate</span>
            </div>
            <div className="border-r border-b border-green-cool flex items-center justify-center h-[100px] bg-secondary-background rounded-sm">
              <span>Prototype</span>
            </div>
            <div className="border-t border-r border-green-cool flex items-center justify-center h-[100px] bg-secondary-background rounded-sm">
              <span>Qualitative test</span>
            </div>
            <div className="border-t border-b border-green-cool flex items-center justify-center h-[100px] bg-secondary-background rounded-sm">
              <span>Quantitative test</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
