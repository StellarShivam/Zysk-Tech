import React, { useState } from "react";
import { ChevronDownIcon, X, Menu } from "lucide-react";
import Logo from "../../assets/Logomark.png";
import Avatar from "../../assets/Avatar (2).png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <header className="relative border-b border-gray-200">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img src={Logo} alt="Logo" className="w-8 h-8" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Untitled UI
              </span>
            </a>
            <nav className="hidden md:ml-8 md:flex md:space-x-8 ">
              <a
                href="/"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold"
              >
                Home
              </a>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("products")}
                  className="text-gray-500 group inline-flex items-center hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold"
                >
                  <span>Products</span>
                  <ChevronDownIcon
                    className="ml-1 h-4 w-4 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </button>
                {activeDropdown === "products" && (
                  <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href="/products"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="ml-4">
                            <p className="text-base font-semibold text-gray-900">
                              Products Overview
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Explore our complete suite of products and
                              solutions.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("resources")}
                  className="text-gray-500 group inline-flex items-center hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold"
                >
                  <span>Resources</span>
                  <ChevronDownIcon
                    className="ml-1 h-4 w-4 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </button>
                {activeDropdown === "resources" && (
                  <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href="/docs"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="ml-4">
                            <p className="text-base font-semibold text-gray-900">
                              Documentation
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Start integrating our products using our detailed
                              documentation.
                            </p>
                          </div>
                        </a>
                        <a
                          href="/guides"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="ml-4">
                            <p className="text-base font-semibold text-gray-900">
                              Guides
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              In-depth guides to help you get the most out of
                              our platform.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="/pricing"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold"
              >
                Pricing
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <img
                className="h-8 w-8 rounded-full"
                src={Avatar}
                alt="User avatar"
              />
            </div>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="absolute z-40 bg-white w-full border-b border-gray-200">
            <div className="pt-2 pb-6 px-4 space-y-6">
              <div className="flex items-center justify-between h-16 fixed top-0 right-0 left-0 px-4 bg-white border-b border-gray-200">
                <div className="flex items-center">
                  <img src={Logo} alt="Logo" className="w-8 h-8" />
                  <span className="ml-2 text-lg font-semibold text-gray-900">
                    Untitled UI
                  </span>
                </div>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="space-y-8">
                <a
                  href="/"
                  className="block text-base font-semibold text-gray-900"
                >
                  Home
                </a>
                <div>
                  <button
                    onClick={() => toggleDropdown("products")}
                    className="flex items-center justify-between w-full text-base font-medium text-gray-900"
                  >
                    <span>Products</span>
                    <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" />
                  </button>
                  {activeDropdown === "products" && (
                    <div className="mt-4 ml-4 space-y-4">
                      <a
                        href="/products"
                        className="block text-base text-gray-500"
                      >
                        Products Overview
                      </a>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    onClick={() => toggleDropdown("resources")}
                    className="flex items-center justify-between w-full text-base font-medium text-gray-900"
                  >
                    <span>Resources</span>
                    <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" />
                  </button>
                  {activeDropdown === "resources" && (
                    <div className="mt-4 ml-4 space-y-4">
                      <a href="/docs" className="block text-base text-gray-500">
                        Documentation
                      </a>
                      <a
                        href="/guides"
                        className="block text-base text-gray-500"
                      >
                        Guides
                      </a>
                    </div>
                  )}
                </div>
                <a
                  href="/pricing"
                  className="block text-base font-medium text-gray-900"
                >
                  Pricing
                </a>

                <div className="pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4 font-semibold">
                      <a
                        href="/about"
                        className="block text-base text-gray-500"
                      >
                        About us
                      </a>
                      <a
                        href="/press"
                        className="block text-base text-gray-500"
                      >
                        Press
                      </a>
                      <a
                        href="/careers"
                        className="block text-base text-gray-500"
                      >
                        Careers
                      </a>
                      <a
                        href="/legal"
                        className="block text-base text-gray-500"
                      >
                        Legal
                      </a>
                    </div>

                    <div className="space-y-4 font-semibold">
                      <a
                        href="/support"
                        className="block text-base text-gray-500"
                      >
                        Support
                      </a>
                      <a
                        href="/contact"
                        className="block text-base text-gray-500"
                      >
                        Contact
                      </a>
                      <a
                        href="/sitemap"
                        className="block text-base text-gray-500"
                      >
                        Sitemap
                      </a>
                      <a
                        href="/cookies"
                        className="block text-base text-gray-500"
                      >
                        Cookie settings
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <button className="w-full py-3 font-semibold px-4 rounded-lg text-white bg-defaultPurple hover:bg-defaultTextPurple transition-colors">
                      Sign up
                    </button>
                    <button className="w-full py-3 font-semibold px-4 rounded-lg text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors">
                      Log in
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
