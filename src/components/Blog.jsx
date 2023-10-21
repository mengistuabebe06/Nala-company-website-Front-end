import React from "react";

export default function () {
  const blog = [
    {
      id: 1,
      title: "anage your entire comminity in a single system",
      image: "src/assets/service.jpg",
    },
    {
      id: 2,
      title: "anage your entire comminity in a single system",
      image: "src/assets/service.jpg",
    },
    {
      id: 3,
      title: "anage your entire comminity in a single system",
      image: "src/assets/service.jpg",
    },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 ">
          in a single system
        </h2>
        <p className="text-sm text-neutralGrey mb-8 mf:w-3/4">
          Manage your entire comminity in a single system Manage
        </p>
      </div>
      {/* all blogs */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blog.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt=""
              className="hover:scale-95 transition-all duration-300"
            />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 bottom-0">
              <h3 className="mb-3 text-neutralGrey font-semibold">
                {blog.title}
              </h3>
              <div className="flex items-center gap-8 justify-center">
                <a href="/" className="font-bold text-brandPrimary">
                  Read more !
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
