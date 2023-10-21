import React from "react";
import aboutimg from "../assets/about4.jpg";
import icons from "../assets/icons/membership.jpg";
export default function About() {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutimg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              {" "}
              Manage your entire comminity in a single system
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              {" "}
              Manage your entire comminity in a single system Manage your entire
              comminity in a single system Manage your entire comminity in a
              single system Manage your entire comminity in a single system
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      {/* campany stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Manage comminity <br></br>{" "}
              <span className="text-brandPrimary">in a single system</span>
            </h2>
            <p>Manage your entire comminity in a single system Manage</p>
          </div>
          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={icons} alt="" className="h-20 w-20" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    3,544,444
                  </h4>
                  <p>Memebers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={icons} alt="" className="h-20 w-20" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    3,544,444
                  </h4>
                  <p>Memebers</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={icons} alt="" className="h-20 w-20" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    3,544,444
                  </h4>
                  <p>Memebers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={icons} alt="" className="h-20 w-20" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    3,544,444
                  </h4>
                  <p>Memebers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
