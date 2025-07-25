"use client";
import React from "react";
import projects from "@/data/projects.json";
import { Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Portfolio() {
  const selectedProjects = projects.filter((item) => item.selected);
  const swiperOptions = {
    modules: [Pagination, Navigation, Mousewheel],
    slidesPerView: "auto",
    spaceBetween: 80,
    mousewheel: true,

    loop: true,
    touchRatio: 0.2,
    speed: 1500,
    pagination: {
      el: ".work-crev .swiper-pagination",
      type: "progressbar",
    },

    navigation: {
      nextEl: ".work-crev .swiper-button-next",
      prevEl: ".work-crev .swiper-button-prev",
    },
  };
  return (
    <section className="work-crev sub-bg" id="selected-work">
      <div className="container section-padding position-re bord-top-grd bord-bottom-grd">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">My work</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Selected <span className="fw-200">Work</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="work-swiper out-right">
          <Swiper {...swiperOptions}>
            {selectedProjects.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="item d-flex align-items-center">
                  <div className="cont">
                    <h6 className="sub-title main-color mb-15">{item.category}</h6>
                    <h2>{item.title} <br/> {item.subTitle}</h2>
                    <a
                      href={`/work/${item.slug}`}
                      className="butn-crev d-flex align-items-center mt-30"
                    >
                      <span className="hover-this">
                        <span className="circle hover-anim">
                          <i className="ti-arrow-top-right"></i>
                        </span>
                      </span>
                      <span className="text">View Project</span>
                    </a>
                  </div>
                  <div className="img">
                    <img src={item.thumbnail_home} alt="" className="radius-15" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="vi-more d-flex justify-content-center mt-50">
          <a
            href="/work"
            className="butn butn-sm butn-bord radius-30 ml-3"
          >
            <span>View All</span>
          </a>
          <span className="icon ti-arrow-top-right"></span>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
