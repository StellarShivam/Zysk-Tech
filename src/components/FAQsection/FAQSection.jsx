import React from "react";
import FAQItem from "./FAQItem";
import AvatarGrp from "../../assets/Avatar group.png";

const FAQSection = () => {
  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      isOpen: true,
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can change your plan at any time. Your new plan will take effect immediately.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time. Once cancelled, you'll have access until the end of your billing period.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can add additional information to your invoices, such as your company details, VAT number, or specific billing requirements.",
    },
    {
      question: "How does billing work?",
      answer:
        "We offer monthly and annual billing options. You'll be charged at the start of each billing period.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change your account email through your account settings. We'll send a verification email to confirm the change.",
    },
  ];

  return (
    <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] h-px bg-gray-200" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] h-px bg-gray-200" />

      <div className="max-w-[52rem] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            Frequently asked questions
          </h2>
          <p className="text-2xl text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="divide-y divide-gray-200">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={faq.isOpen}
            />
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 text-center mt-16">
        <div className="flex justify-center mb-4">
          <div className="flex -space-x-2">
            <img
              src={AvatarGrp}
              alt="Avatar Group"
              width={128}
              height={64}
              className="w-[8rem] h-[4rem]"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6">
          Can't find the answer you're looking for? Please chat to our friendly
          team.
        </p>
        <button className="bg-defaultPurple font-semibold text-white px-4 py-3 rounded-lg hover:bg-defaultTextPurple transition-colors">
          Get in touch
        </button>
      </div>
    </div>
  );
};
export default FAQSection;
