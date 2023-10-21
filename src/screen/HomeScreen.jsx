import React, { useEffect } from "react";
import { Carousel } from "flowbite-react";
import banner1 from "../assets/banner-green1.png";
import banner2 from "../assets/Top-Custom-software-development.png";
import { useDispatch, useSelector } from "react-redux";
import { courseList } from "../action/courseAction";
import { newsList } from "../action/newsAction";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const { loading, error, courses } = useSelector((state) => state.CourseList);
  console.log("couse data @ home page");
  console.log(courses);

  useEffect(() => {
    dispatch(courseList());
    dispatch(newsList());
  }, [dispatch]);
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            {/* Hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Work with{" "}
                <span className="text-blue-500 leading-snug">
                  Simba-Tech
                  {/* from 8 years */}
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8"> Here to grow</p>
              <button className="btn-success">Register</button>
            </div>
          </div>
          {/* <div className="flex h-full items-center justify-center">Slide 2</div>
          <div className="flex h-full items-center justify-center">Slide 3</div> */}
        </Carousel>
      </div>
    </div>
  );
}
