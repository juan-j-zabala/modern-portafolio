import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { images } from "../../constants";

const abouts = [
  {
    title: "Web Development",
    description: "I am a good web developer.",
    imgUrl: images.about01,
  },
  {
    title: "Web Design",
    description: "I am a good web developer.",
    imgUrl: images.about02,
  },
  {
    title: "UI/UX",
    description: "I am a good web developer.",
    imgUrl: images.about03,
  },
  {
    title: "Web Animations",
    description: "I am a good web developer.",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head_text text-[2.75rem] font-extrabold text-center text-skin-black-color capitalize 3xl:text-[4rem] max-[450px]:text-[2rem]">
        I Know that
        <span className="text-skin-secondary-color"> Good Design</span>
        <br />
        means
        <span className="text-skin-secondary-color"> Good Business</span>
      </h2>
      <div className="app__profiles flex justify-center items-start flex-wrap mt-8 ">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile_item w-[20%] flex justify-start items-start flex-col m-8 "
            key={about.title + index}
          >
            <img className="rounded-2xl" src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text text-base font-extrabold text-skin-black-color text-left 3xl:text-[2rem] max-[450px]:text-sm mt-5">
              {about.title}
            </h2>
            <p className="p-text text-sm text-left text-skin-gray-color leading-6 3xl:text-[1.75rem] mt-[10px]">
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
