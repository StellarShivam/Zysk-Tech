import React from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import Analysis from "../../assets/analysys.png";
import Logo1 from "../../assets/Fictional company logo.png";
import Logo2 from "../../assets/Fictional company logo (1).png";
import Logo3 from "../../assets/Fictional company logo (2).png";
import Logo4 from "../../assets/Fictional company logo (5).png";
import Logo5 from "../../assets/Fictional company logo (3).png";
import Logo6 from "../../assets/Fictional company logo (4).png";

const AnalyticsLanding = () => {
  const companyLogos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];
  return (
    <>
      <div className="bg-white">
        <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20">
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-2 pl-[0.2rem] pr-2 pt-[0.2rem] pb-[0.2rem] bg-purple-50/50 rounded-full border border-purple-100">
              <div className="px-3 bg-white rounded-full border border-purple-200">
                <span className="text-[0.7rem] sm:text-sm font-medium text-defaultTextPurple">
                  New feature
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center text-xs sm:text-sm font-medium text-defaultTextPurple hover:text-purple-700 transition-colors"
              >
                Check out the team dashboard
                <ArrowRight className="ml-2 h-3 sm:h-4 w-3 sm:w-4" />
              </a>
            </div>
          </div>

          <div className="text-center mx-auto mb-12 mt-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 max-w-[70rem] mx-auto">
              Beautiful analytics to grow smarter
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto px-4">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-lg font-medium text-gray-900 bg-white hover:bg-gray-50 transition-colors">
                <PlayCircle className="pr-1" />
                Demo
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-lg font-medium text-white bg-defaultPurple hover:bg-defaultTextPurple transition-colors">
                Sign up
              </button>
            </div>
          </div>

          <div className="relative max-w-[84rem] mx-auto">
            <div className="relative md:h-[37rem] rounded-2xl md:rounded-b-none border-8 md:border-b-0 border-black overflow-hidden">
              <img
                src={Analysis}
                alt="Analytics Dashboard Preview"
                className="w-full h-full object-cover md:object-top"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 pb-24 max-w-[84rem] mx-auto relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] h-px bg-gray-200" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] h-px bg-gray-200" />

        <h2 className="text-center text-lg text-gray-600 mb-12 font-semibold">
          Join 4,000+ companies already growing
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-8 px-4 max-w-[84rem] mx-auto">
          {companyLogos.map((company, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <img
                src={company}
                alt={`Company logo ${idx + 1}`}
                className="h-8 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnalyticsLanding;
