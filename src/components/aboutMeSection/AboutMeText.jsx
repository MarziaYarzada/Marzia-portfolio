import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="mb-10 text-6xl text-cyan ">About Me</h2>
      <p className="text-white">
        I'm Marzia Yarzada, a full-stack web developer with over two years of
        experience in building modern and scalable web applications. I
        specialize in front-end and back-end development, working with
        technologies like React.js, Redux Toolkit, React Router, Node.js,
        Express.js, MongoDB, and Mongoose.I have a strong passion for creating
        intuitive and high-performance user interfaces, from wireframing to
        developing efficient and reusable components. My journey in software
        development has been driven by continuous learning and a commitment to
        delivering exceptional user experiences.Beyond coding, I enjoy mentoring
        aspiring developers and contributing to the tech community. Whether it's
        optimizing backend logic or refining front-end interactions, I strive to
        build applications that are both functional and visually appealing.
      </p>
      <button className="flex items-center px-4 py-2 mt-10 text-lg text-white transition-all duration-500 border rounded-full cursor-pointer border-orange hover:bg-orange md:self-start sm:self-center hover:text-cyan">
       
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
