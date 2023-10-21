import React from "react";
import client1 from "../assets/client-logo.jpg";
import client2 from "../assets/kvo.png";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Software Developement",
      description:
        "our menebership doftware providers full automation of memebrship renewals and payement",
      image: "/src/assets/softicons.png",
    },
    {
      id: 2,
      title: "Networking Service",
      description: "our menebershi",
      image: "/src/assets/network.jpg",
    },
    {
      id: 3,
      title: "Traning Service",
      description:
        "our menebership doftware providers full automation of memebrship renewals and payement",
      image: "/src/assets/Video-conference.jpg",
    },
    
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          {" "}
          Our Clients
        </h2>
        <p className="text-neutralDGrey">
          We have been working with some Fortune 100+ Clients
        </p>
        <div className="my-12 flex flex-wrap justify-between">
          <img src={client1} alt="" className="h-10 w-10" />
          <img src={client2} alt="" className="h-10 w-10" />
          <img src={client1} alt="" className="h-10 w-10" />
          <img src={client2} alt="" className="h-10 w-10" />
          <img src={client1} alt="" className="h-10 w-10" />
          <img src={client2} alt="" className="h-10 w-10" />
        </div>
      </div>
      {/* serice card  */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Services We Offer For You
        </h2>
        <p className="text-neutralDGrey">Who is Nextcnet suitable for?</p>
      </div>
      {/* cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 items-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-white rounded-t1-3x1  rounded-br-3x1 items-center">
                {/* bg-[#E8F5E9] h-14 w-14 mx-auto rounded-t1-3x1 rounded-br-3x1 */}
                <img src={service.image} alt="" className="-ml-5 h-25 w-25 mx-auto" />
                <h4 className="text-2x1 font-bold text-neutralDGrey mb-2 px-2">
                  {service.title}
                </h4>
                <p className="text-sm text-neutralGrey">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
