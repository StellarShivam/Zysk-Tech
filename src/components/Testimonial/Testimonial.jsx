import React from "react";
import { Zap } from "lucide-react";
import Logo from "../../assets/Fictional company logo (6).png";
import Avatar from "../../assets/Avatar (3).png";
const Testimonial = () => {
  return (
    <div className="py-12 sm:py-16 md:py-24 px-4 bg-[#F9FAFB]">
      <div className="max-w-[80rem] mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 md:mb-12">
          <img src={Logo} className="w-24 sm:w-28 md:w-36 h-8 sm:h-9 md:h-10" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-8 sm:mb-12 md:mb-16 leading-tight max-w-[74rem] mx-auto">
          We've been using Untitled to kick start every new project and can't
          imagine working without it.
        </h2>

        <div className="flex flex-col items-center">
          <img
            src={Avatar}
            alt="Candice Wu"
            className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full mb-3 sm:mb-4"
          />
          <div className="font-medium mb-1 text-base sm:text-lg">
            Candice Wu
          </div>
          <div className="text-gray-600 text-sm sm:text-base">
            Product Manager, Sisyphus
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
