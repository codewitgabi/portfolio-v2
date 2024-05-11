import GradientButton from "../GradientButton";
// import PaperPlane from "../../assets/paper plane.png";

function ContactSection() {
  return (
    <>
      <section className="mt-[5em] bg-secondary-background" id="contact">
        <div className="w-[1024px] mx-auto p-8 grid grid-cols-2 gap-8">
          <div className="flex flex-col items-start gap-6">
            <div className="">
              <h2 className="text-2xl">Have any project idea?</h2>
              <span className="text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore, recusandae!
              </span>
            </div>

            <GradientButton text="Contact now" />
          </div>

          <div className="">
            <h3 className="border border-green-cool w-max py-2 px-8 rounded-ss-3xl rounded-ee-3xl">
              Send me a message
            </h3>
            <form action="" method="post">
              <div className="mt-16 grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="outline-none border-b border-green-cool bg-inherit w-full text-sm caret-green-cool contact-input"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute bottom-1 left-0 text-sm text-slate-400 transition-all duration-300"
                  >
                    Name*
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="outline-none border-b border-green-cool bg-inherit w-full text-sm caret-green-cool contact-input"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute bottom-1 left-0 text-sm text-slate-400 transition-all duration-300"
                  >
                    Email*
                  </label>
                </div>
              </div>
              <div className="relative mt-16">
                <textarea
                  name="message"
                  id="message"
                  required
                  className="resize-none outline-none border-b border-green-cool bg-inherit w-full text-sm caret-green-cool contact-textarea"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute bottom-3 left-0 text-sm text-slate-400 transition-all duration-300"
                >
                  Message*
                </label>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
