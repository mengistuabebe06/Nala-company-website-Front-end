import React from "react";
import icons from "../assets/icons/membership.jpg";
import aboutimg from "../assets/const3.jpg";
import sidimgae from "../assets/constraction.jpg";
export default function Products() {
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
          <div className="md:w-1/3">
            <img src={sidimgae} alt="" />
          </div>
          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                {" "}
                Manage your entire comminity in a single system Manage your
                entire comminity in a single system Manage your entire comminity
                in a single system
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p className="text-base text-brandPrimary mb-8">
                Korean volontay ofiganzation
              </p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img
                    src="src/assets/kvo.png"
                    alt=""
                    className="h-10 w-10 cursor-pointer"
                  />
                  <img
                    src="src/assets/kvo.png"
                    alt=""
                    className="h-10 w-10 cursor-pointer"
                  />
                  <img
                    src="src/assets/kvo.png"
                    alt=""
                    className="h-10 w-10 cursor-pointer"
                  />
                  <img
                    src="src/assets/kvo.png"
                    alt=""
                    className="h-10 w-10 cursor-pointer"
                  />
                  <img
                    src="src/assets/kvo.png"
                    alt=""
                    className="h-10 w-10 cursor-pointer"
                  />
                  <img
                    src="src/assets/kvo.png"
                    alt=""
                    className=" h-10 w-10 cursor-pointer"
                  />
                  <div className="flex gap-8">
                    <a
                      href="/"
                      className="font-bold text-brandPrimary hover:text-neutral-700"
                    >
                      Meet all custemer
                      <svg xmlns="" width={17} height={11}>
                        <path />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
