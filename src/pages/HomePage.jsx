import React from "react";
import AnalyticsLanding from "../components/LandingPage/LandingPage";
import FeaturesSection from "../components/Features/Features";
import Testimonial from "../components/Testimonial/Testimonial";
import Features2 from "../components/Features2/Features2";
import FAQSection from "../components/FAQsection/FAQSection";
import BlogSection from "../components/Blog/BlogSection";
import Trial from "../components/Trial/trial";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <AnalyticsLanding />
      <FeaturesSection />
      <Testimonial />
      <Features2 />
      <FAQSection />
      <BlogSection />
      <Trial />
      <Footer />
    </>
  );
};

export default HomePage;
