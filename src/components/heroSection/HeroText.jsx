import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const HeroText = () => {
  return (
    <div className="flex flex-col justify-center h-full gap-4 md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-2xl uppercase sm:text-xl text-cyan"
      >
        Full-Stack Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl  sm:text-4xl font-bold font-special text-orange
      "
      >
        Marzia Yarzada
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-4 text-lg text-white"
      >
        A Passionate Web Developer and Instructor <br /> with 3 years of
        experience
      </motion.p>
    </div>
  );
};

export default HeroText;
