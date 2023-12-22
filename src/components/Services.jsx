import React, { useEffect } from "react";
import client1 from "../assets/client-logo.jpg";
import client2 from "../assets/kvo.png";
import { useDispatch, useSelector } from "react-redux";
import { serviceList } from "../action/serviceAction";
import { clientList } from "../action/clientAction";
import LoadingBox from "../components/LoadingBox";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "BUILDING CONSTRUCTION",
      description:
        "our menebership doftware providers full automation of memebrship renewals and payement",
      image: "/src/assets/cons/1.jpg",
    },
    {
      id: 2,
      title: "RENOVATION",
      description: "our menebershi",
      image: "/src/assets/cons/2.jpg",
    },
    {
      id: 3,
      title: "ARCHITECTURE",
      description:
        "our menebership doftware providers full automation of memebrship renewals and payement",
      image: "/src/assets/cons/3.jpg",
    },
    {
      id: 1,
      title: "CONCRETE SUPPLY",
      description:
        "our menebership doftware providers full automation of memebrship renewals and payement",
      image: "/src/assets/cons/4.jpg",
    },
    {
      id: 2,
      title: "WATER DRILLING",
      description: "our menebershi",
      image: "/src/assets/cons/5.jpg",
    },
    {
      id: 3,
      title: "WATER INSTALATION",
      description:
        "our menebership doftware providers full automation of memebrship renewals and payement",
      image: "/src/assets/cons/6.jpg",
    },
  ];

  const dispatch = useDispatch();
  const { loading, error, service } = useSelector((state) => state.ServiceList);
  console.log("service data");
  console.log(service);
  const { loadingclient, errorclient, client } = useSelector(
    (state) => state.ClientList
  );

  console.log("client images");
  console.log(client);
  useEffect(() => {
    dispatch(serviceList());
    dispatch(clientList());
  }, [dispatch]);
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="Services">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          {" "}
          Our Clients
        </h2>
        <p className="text-neutralDGrey">
          We have been working with some Fortune 100+ Clients
        </p>
        {/* {client?.map((items) => (
          <div className="my-12 flex flex-wrap justify-between">
            <img src={items.image} alt="" className="h-10 w-10" />
            {/* <img src={client2} alt="" className="h-10 w-10" />
            <img src={client1} alt="" className="h-10 w-10" />
            <img src={client2} alt="" className="h-10 w-10" />
            <img src={client1} alt="" className="h-10 w-10" />
            <img src={client2} alt="" className="h-10 w-10" /> */}
        {/* </div> */}
        {/* ))}  */}
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
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : (
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 items-center">
          {service?.map((service) => (
            <div
              key={service.id}
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <div className="bg-white rounded-t1-3x1  rounded-br-3x1 items-center">
                  {/* bg-[#E8F5E9] h-14 w-14 mx-auto rounded-t1-3x1 rounded-br-3x1 */}
                  <img
                    src={service.image}
                    alt=""
                    className="-ml-5 h-25 w-25 mx-auto"
                  />
                  <h4 className="text-2x1 font-bold text-brandPrimary mb-2 px-2">
                    {service.name}
                  </h4>
                  <p className="text-sm text-neutralGrey">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
