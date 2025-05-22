import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { div } from "motion/react-client";
const experiences = [
  {
    job: "Front-End Developer",
    company: "Pedalpro",
    date: "2023 ",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large-scale applications.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience",
    ],
  },
  {
    job: "Course Instructor",
    company: "AYLA ",
    date: "2023 - Present",
    responsibilities: [
      "Teaching HTML,CSS, JavaScript, React .",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
  {
    job: "Back-End Developer",
    company: "Startup Developer",
    date: "2022 ",
    responsibilities: [
      "Designing and developing server-side logic and APIs.",
      "Managing databases and ensuring data integrity.",
      "Implementing authentication and security best practices.",
    ],
  },
];
const AllExperience = () => {
  return (
    <div className="flex items-center justify-between md:flex-row sm:flex-col">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
