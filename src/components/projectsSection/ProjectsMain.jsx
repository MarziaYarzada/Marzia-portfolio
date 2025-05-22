import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import website_1 from '../../../public/images/website-img-1.png'
import website_2 from '../../../public/images/website-img-2.png'
import website_3 from '../../../public/images/website-img-3.png'
import website_4 from '../../../public/images/website-img-4.png'

const projects = [
  {
    name: "Tourism-website ",
    year: "Mar2022",
    align: "left",
    image: website_1,
    link: "#",
  },
  {
    name: "SocialMedia App",
    year: "Sept2022",
    align: "left",
    image: website_2,
    link: "#",
  },
  {
    name: "Shopping App",
    year: "Jan2023",
    align: "right",
    image: website_3,
    link: "#",
  },
  {
    name: "AdminPanel App",
    year: "May2024",
    align: "left",
    image: website_4,
    link: "#",
  },
];
const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return <SingleProject key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
