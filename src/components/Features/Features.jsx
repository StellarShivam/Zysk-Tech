import React from "react";

import Message from "../../assets/message-chat-circle.png";
import Zap from "../../assets/zap.png";
import Chart from "../../assets/chart-breakout-square.png";

import Smile from "../../assets/message-smile-circle.png";
import Command from "../../assets/command.png";
import Heart from "../../assets/message-heart-circle.png";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="text-center p-6">
    <div
      className="inline-flex items-center justify-center w-12 h-12 rounded-xl border shadow-md mb-6"
      style={{ borderColor: "rgb(0 0 0 / 17%)" }}
    >
      <img src={Icon} className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Message,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: Zap,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: Chart,
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
    {
      icon: Smile,
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: Command,
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: Heart,
      title: "Our people make the difference",
      description:
        "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="text-center mb-16">
        <p className="text-defaultTextPurple font-semibold mb-4">Features</p>
        <h2 className="text-4xl font-semibold mb-6">
          Analytics that feels like it's from the future
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
