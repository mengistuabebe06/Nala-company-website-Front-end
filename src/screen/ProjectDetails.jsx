import React, { Component, useEffect } from "react";
import Projects from "../components/Projects";
import Details from "../components/details";
import About from "../components/About";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { projectDetailById } from "../action/projectAction";
import LoadingBox from "../components/LoadingBox";

export default function ProjectDetails() {
  const dispatch = useDispatch();
  // const { loadingp, errorp, projects } = useSelector(
  //   (state) => state.ProjectList
  // );
  const { id } = useParams();
  // id :id;
  console.log(id);

  const { loading, error, projectbyID } = useSelector(
    (state) => state.ProjectDetail
  );

  console.log("project data by prject id");
  console.log(projectbyID);

  useEffect(() => {
    dispatch(projectDetailById(Number(id)));
  }, [dispatch]);

  return (
    <>
      <div className="h-30 my-44"> </div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <p>Error Data Fetching </p>
      ) : (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
          <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <img src={projectbyID.image} alt="" className="h-300" />
            </div>
            <div className="md:w-auto mx-auto">
              <h3 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
                {" "}
                {projectbyID.title}
              </h3>
              <p className="md:w-auto text-sm text-neutralGrey mb-8">
                {" "}
                {projectbyID.description}
              </p>
              <h3 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
                {" "}
              </h3>
              <p className="md:w-auto text-sm text-neutralGrey mb-8">
                {" "}
                Manage your entire comminity in a single system Manage your
                entire comminity in a single system Manage your entire comminity
                in a single system Manage your entire comminity in a single
                system
              </p>

              {/* <button className="btn-primary">Learn More</button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
