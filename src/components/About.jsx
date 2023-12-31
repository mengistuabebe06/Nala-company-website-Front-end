import React from "react";
import aboutimg from "../assets/about/4.png";
import icons from "../assets/icons/membership.jpg";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
export default function About() {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutimg} alt="" />
          </div>
          <div className="md:w-auto mx-auto">
            <h3 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              {" "}
              About Our Compnay
            </h3>
            <p className="md:w-auto text-sm text-neutralGrey mb-8">
              {" "}
              Manage your entire comminity in a single system Manage your entire
              comminity in a single system Manage your entire comminity in a
              single system Manage your entire comminity in a single system
            </p>
            <h3 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              {" "}
              Mission
            </h3>
            <p className="md:w-auto text-sm text-neutralGrey mb-8">
              {" "}
              Manage your entire comminity in a single system Manage your entire
              comminity in a single system Manage your entire comminity in a
              single system Manage your entire comminity in a single system
            </p>
            <h3 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              {" "}
              Vision
            </h3>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              {" "}
              Manage your entire comminity in a single system Manage your entire
              comminity in a single system Manage your entire comminity in a
              single system Manage your entire comminity in a single system
            </p>
            {/* <button className="btn-primary">Learn More</button> */}
          </div>
        </div>
      </div>
    
    </div>
  );
}
