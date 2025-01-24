import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import SVGs from src/assets/img
import githubIcon from "../assets/img/github-dark.svg";
import pythonIcon from "../assets/img/python-dark.svg";
import sqliteIcon from "../assets/img/sqlite.svg";
import godotIcon from "../assets/img/godot-auto.svg";
import reactIcon from "../assets/img/react-dark-1.svg";
import nodejsIcon from "../assets/img/nodejs-dark.svg";
import cppIcon from "../assets/img/cpp.svg";
import cssIcon from "../assets/img/css.svg";
import tensorFlowIcon from "../assets/img/tensorflow-auto.svg";

export const Skills = () => {
  const skills = [
    { name: "GitHub", img: githubIcon },
    { name: "Python", img: pythonIcon },
    { name: "SQLite", img: sqliteIcon },
    { name: "Godot", img: godotIcon },
    { name: "React", img: reactIcon },
    { name: "NodeJs", img: nodejsIcon },
    { name: "Cpp", img: cppIcon },
    { name: "CSS", img: cssIcon },
    { name: "Machine Learning", img: tensorFlowIcon },



  ];

  return (
    <section id="skills" className="bg-gray-900 py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">My Skills 💻</h2>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            Here are some of the technologies and tools I am proficient in. Always eager to learn more and grow! 🌱
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="pb-20 h-[250px]"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-indigo-700 to-indigo-100 rounded-2xl shadow-lg py-6 px-4 max-w-[160px] w-full mx-auto text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <div className="text-indigo-900 text-lg font-semibold">
                    {skill.name}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
