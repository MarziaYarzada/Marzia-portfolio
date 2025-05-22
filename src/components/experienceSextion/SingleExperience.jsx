import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const SingleExperience = ({ experience }) => {
  const { job, company, date, responsibilities } = experience;
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-xl mt-12 p-4"
    >
      <p className="font-bold text-cyan">{job}</p>
      <p className="text-orange">{company}</p>
      <p className="text-lightGrey">{date}</p>
      <ul className="pl-4 mt-4 text-white list-disc">
        {responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
