import React from "react";

import Message from "../../assets/message-chat-circle.png";
import Zap from "../../assets/zap.png";
import Chart from "../../assets/chart-breakout-square.png";
import content from "../../assets/Content (2).png";

import contentMobile from "../../assets/iPhone 12 Pro mockup.png";

const Features2 = () => {
  return (
    <div className="max-w-[84rem] mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 mb-4 bg-softPurple rounded-full border border-softPurple2">
          <span className="text-defaultTextPurple text-sm font-medium ">
            Features
          </span>
        </div>
        <h1 className="text-4xl font-semibold mb-4">
          Cutting-edge features for advanced analytics
        </h1>
        <p className="text-gray-600 text-2xl max-w-[53rem] mx-auto">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="flex pl-5 max-h-[42rem] overflow-hidden">
        <img
          src={content}
          alt="Analytics Dashboard"
          className="w-full object-cover hidden md:block md:object-top"
        />
        <img
          src={contentMobile}
          alt="Analytics Dashboard Mobile"
          className="w-full object-cover md:hidden"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div
              className="p-3 rounded-lg border shadow-md"
              style={{ borderColor: "rgb(0 0 0 / 17%)" }}
            >
              <img src={Message} className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">Share team inboxes</h3>
          <p className="text-gray-600 mb-4">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <a
            href="#"
            className="text-defaultTextPurple font-semibold inline-flex items-center"
          >
            Learn more
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div
              className="p-3 rounded-lg border shadow-md"
              style={{ borderColor: "rgb(0 0 0 / 17%)" }}
            >
              <img src={Zap} className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">
            Deliver instant answers
          </h3>
          <p className="text-gray-600 mb-4">
            An all-in-one customer service platform that helps you balance
            everything your customers need to be happy.
          </p>
          <a
            href="#"
            className="text-defaultTextPurple font-semibold inline-flex items-center"
          >
            Learn more
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div
              className="p-3 rounded-lg border shadow-md"
              style={{ borderColor: "rgb(0 0 0 / 17%)" }}
            >
              <img src={Chart} className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">
            Manage your team with reports
          </h3>
          <p className="text-gray-600 mb-4">
            Measure what matters with Untitled's easy-to-use reports. You can
            filter, export, and drilldown on the data in a couple clicks.
          </p>
          <a
            href="#"
            className="text-defaultTextPurple font-semibold inline-flex items-center"
          >
            Learn more
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features2;
