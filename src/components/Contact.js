import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-evenly bg-slate-300 px-4 py-10">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col items-start gap-5"
      >
        <div>
          <h2 className="text-[#a363aa] text-[40px] font-semibold mb-1">
            Get in touch
          </h2>
          <hr className="w-[120px] h-[5px] bg-[#a363aa] rounded-[10px] mb-5 border-none" />
        </div>

        <input
          type="hidden"
          name="access_key"
          value="3ca575a2-a135-4a7e-b1ee-b6d6110fbf2f"
        />

        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-[400px] h-[50px] px-6 rounded-full text-[#666] font-medium outline-none border focus:border-2 focus:border-orange-400 placeholder:text-[#a9a9a9] max-w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-[400px] h-[50px] px-6 rounded-full text-[#666] font-medium outline-none border focus:border-2 focus:border-orange-400 placeholder:text-[#a9a9a9] max-w-full"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          className="w-[400px] h-[140px] px-6 pt-4 rounded-2xl text-[#666] font-medium outline-none border focus:border-2 focus:border-orange-400 placeholder:text-[#a9a9a9] max-w-full"
        ></textarea>

        {/* Updated Submit Button */}
        <button
          type="submit"
          className="relative rounded-[6px] overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-200 rounded-[6px]" />
          <div className="relative flex items-center gap-2 px-8 py-2 bg-black text-white transition duration-200 group-hover:bg-transparent">
            Submit
            <img
              src="/images/arrow_icon.png"
              alt="Arrow"
              className="h-[15px]"
            />
          </div>
        </button>
      </form>

      <div className="hidden md:block">
        <img
          src="/images/right_img.png"
          alt="Contact Illustration"
          className="w-[500px]"
        />
      </div>
    </div>
  );
};

export default Contact;
