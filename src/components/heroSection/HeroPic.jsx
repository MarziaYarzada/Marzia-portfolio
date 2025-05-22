import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { GiSquare } from "react-icons/gi";
import imgage from '../../assets/Javascript.jpeg'
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex items-center justify-center h-full"
    >
      <img
        src={imgage}
        alt="Marzia Yarzada"
        className="max-h-[350px] w-auto rounded-lg"
      />
      <div className="absolute flex justify-center -z-10 animate-pulse">
        <GiSquare className="md:h-[75%]  sm:h-[100%] min-h-[450px] w-auto text-cyan blur-md animate-[spin_20s_linner_infinit]" />
      </div>
      <link rel="stylesheet"  />
    </motion.div>
  );
};

export default HeroPic;
