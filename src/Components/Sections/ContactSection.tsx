import React from "react";
import GradientButton from "../GradientButton";

// const EMAIL_USER = import.meta.env.VITE_EMAIL_USER;
// const EMAIL_PASSWORD = import.meta.env.VITE_EMAIL_PASSWORD;
// const EMAIL_PORT = import.meta.env.VITE_EMAIL_PORT;

function ContactSection() {
  const handleContactMessaging = async (e: React.FormEvent) => {
    e.preventDefault();

    // const transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: EMAIL_PORT,
    //   secure: true,
    //   auth: {
    //     user: EMAIL_USER,
    //     pass: EMAIL_PASSWORD,
    //   },
    // });

    // const { sender, email, message } = e.target as HTMLFormElement;

    // await transporter.sendMail({
    //   from: email.value,
    //   to: "",
    //   subject: `Portfolio from ${sender.value}`,
    //   text: message.value,
    //   html: `<p>${message.value}</p>`,
    // });

    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="mt-[5em] bg-secondary-background" id="contact">
        <div className="w-[1024px] mx-auto py-8 grid grid-cols-2 gap-8 max-[1070px]:w-[initial] max-[1070px]:mx-[1.5em] max-[675px]:grid-cols-1 max-[675px]:gap-20">
          <div className="flex flex-col items-start gap-6">
            <div className="">
              <h2 className="text-2xl">Have any project idea?</h2>
              <span className="text-slate-500">
                Ready to turn your ideas into reality? Reach out today, and
                let's embark on a journey of digital transformation together.
              </span>
            </div>

            <GradientButton text="Contact now" />
          </div>

          <div className="">
            <h3 className="border border-green-cool w-max py-2 px-8 rounded-ss-3xl rounded-ee-3xl">
              Send me a message
            </h3>
            <form action="" method="post" onSubmit={handleContactMessaging}>
              <div className="mt-16 grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="sender"
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

              <button className="inline-block w-max mt-12 bg-green-cool text-slate-500 rounded-full py-2 px-12 hover:bg-green-200 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
