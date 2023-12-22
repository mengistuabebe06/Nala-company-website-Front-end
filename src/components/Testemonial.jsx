import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testimonialList } from "../action/testimonialAction";

export default function Testemonial() {
  const dispatch = useDispatch();
  const { loading, error, testimonial } = useSelector(
    (state) => state.TestimonialList
  );

  console.log("testimonial @ news page");
  console.log(testimonial);

  useEffect(() => {
    dispatch(testimonialList());
  }, [dispatch]);
  return (
    <>
      {/* <!-- Container for demo purpose --> */}
      <div class="container my-24 mx-auto md:px-6">
        <section class="mb-32 text-center">
          <h2 class="mb-12 text-3xl font-bold">Testimonials</h2>

          <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            {testimonial?.map((items) => (
              <div class="mb-12 md:mb-0">
                <div class="mb-6 flex justify-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                    // src={items.photo}
                    class="w-32 rounded-full shadow-lg dark:shadow-black/20"
                  />
                </div>
                <h5 class="mb-2 text-lg font-bold">{items.name}</h5>
                <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
                  {items.title}
                </h6>
                <p class="mb-4">
                  {items.description}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    class="inline-block w-6"
                  >
                    <path
                      fill="currentColor"
                      d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                    />
                  </svg>
                </p>
                <ul class="mb-0 flex justify-center">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
