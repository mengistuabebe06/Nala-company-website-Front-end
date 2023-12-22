import React, { useEffect, useState } from "react";
// import { Link } from "react-scroll";
import logo from "../assets/3.png";
import simba from "../assets/SimbaLogo (1).png";
// react icons
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  // navitems array

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Service", path: "/service" },
    { link: "About", path: "/about" },
    { link: "Career", path: "/career" },
    { link: "Testimonial", path: "/testemonial" },
    { link: "Projects", path: "/projects" },
  ];
  return (
    <header className="w-full bg-gray-400 md:bg-gray-100 fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-slate-400 duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={simba}
              alt=""
              className="w-12 inline-block items-center"
            />{" "}
            <span className="text-[#263238]"> SimbaTech </span>
            <p>Technology Solution</p>
          </a>
          {/* nav items for large device */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                // onClick={this.handleScroll}
                to={path}
                key={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-base text-gray900 hover:text-brandPrimary cursor-pointer first:font-medium"
              >
                {link}
              </Link>
              //   <Button color="gray">
              //   Gray
              // </Button>
            ))}
          </ul>
          {/* btn for large device  */}
          <div className="space-x-12 hidden lg:flex items-center">
            {/* <a
              href=""
              className="hidden lg:flex items-center text-blue-500 hover:text-gray900"
            >
              Login
            </a> */}
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              <a href="/contact">Contact</a>
            </button>
          </div>
          {/* menu btn only for mobile device */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? <HiX className="h-6 w-6 " /> : <HiMenu />}
            </button>
          </div>
        </div>
        {/* nav items for mobile divice  */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              key={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block text-base text-white hover:text-brandPrimary first:font-medium"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
