import React from "react";

export default function Newstletter() {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
            Manage comminity
          </h2>
          <div className="flex items-center justify-center gap-8">
            <button>
              <a
                href="/"
                className="font-bold text-brandPrimary hover:text-neutral-700"
              >
                Get a Demo
                <svg xmlns="" width={17} height={11}>
                  <path />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
