import React, { useState } from "react";
import Logo from "../../assets/Logomark.png";

const DynamicFooter = () => {
  const [footerData] = useState({
    sections: [
      {
        id: "product",
        title: "Product",
        links: [
          { id: "overview", text: "Overview", href: "#" },
          { id: "features", text: "Features", href: "#" },
          {
            id: "solutions",
            text: "Solutions",
            href: "#",
            badge: { text: "New", color: "green" },
          },
          { id: "tutorials", text: "Tutorials", href: "#" },
          { id: "pricing", text: "Pricing", href: "#" },
          { id: "releases", text: "Releases", href: "#" },
        ],
      },
      {
        id: "company",
        title: "Company",
        links: [
          { id: "about", text: "About us", href: "#" },
          { id: "careers", text: "Careers", href: "#" },
          { id: "press", text: "Press", href: "#" },
          { id: "news", text: "News", href: "#" },
          { id: "media", text: "Media kit", href: "#" },
          { id: "contact", text: "Contact", href: "#" },
        ],
      },
      {
        id: "resources",
        title: "Resources",
        links: [
          { id: "blog", text: "Blog", href: "#" },
          { id: "newsletter", text: "Newsletter", href: "#" },
          { id: "events", text: "Events", href: "#" },
          { id: "help", text: "Help centre", href: "#" },
          { id: "tutorials-res", text: "Tutorials", href: "#" },
          { id: "support", text: "Support", href: "#" },
        ],
      },
      {
        id: "use-cases",
        title: "Use cases",
        links: [
          { id: "startups", text: "Startups", href: "#" },
          { id: "enterprise", text: "Enterprise", href: "#" },
          { id: "government", text: "Government", href: "#" },
          { id: "saas", text: "SaaS centre", href: "#" },
          { id: "marketplaces", text: "Marketplaces", href: "#" },
          { id: "ecommerce", text: "Ecommerce", href: "#" },
        ],
      },
      {
        id: "social",
        title: "Social",
        links: [
          { id: "twitter", text: "Twitter", href: "#" },
          { id: "linkedin", text: "LinkedIn", href: "#" },
          { id: "facebook", text: "Facebook", href: "#" },
          { id: "github", text: "GitHub", href: "#" },
          { id: "angellist", text: "AngelList", href: "#" },
          { id: "dribbble", text: "Dribbble", href: "#" },
        ],
      },
      {
        id: "legal",
        title: "Legal",
        links: [
          { id: "terms", text: "Terms", href: "#" },
          { id: "privacy", text: "Privacy", href: "#" },
          { id: "cookies", text: "Cookies", href: "#" },
          { id: "licenses", text: "Licenses", href: "#" },
          { id: "settings", text: "Settings", href: "#" },
          { id: "contact-legal", text: "Contact", href: "#" },
        ],
      },
    ],
    companyInfo: {
      name: "Untitled UI",
      logo: {
        gradientFrom: "purple-500",
        gradientTo: "purple-600",
      },
      copyright: "© 2077 Untitled UI. All rights reserved.",
    },
  });

  const FooterSection = ({ section }) => (
    <div className="space-y-4">
      <h3 className="font-semibold text-[#667085]">{section.title}</h3>
      <nav className="flex flex-col space-y-3">
        {section.links.map((link) => (
          <div key={link.id} className="flex items-center gap-2">
            <a
              href={link.href}
              className="text-[#475467] font-semibold hover:text-gray-900 transition-colors"
            >
              {link.text}
            </a>
            {link.badge && (
              <span
                className={`px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full`}
              >
                {link.badge.text}
              </span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <footer className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
        {footerData.sections.map((section) => (
          <FooterSection key={section.id} section={section} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start pt-8 border-t border-gray-200">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src={Logo} alt="Company logo" className="w-10 h-10" />
          <span className="font-semibold text-xl">
            {footerData.companyInfo.name}
          </span>
        </div>
        <p className="text-gray-600 self-start md:self-auto">
          {footerData.companyInfo.copyright}
        </p>
      </div>
    </footer>
  );
};

export default DynamicFooter;
