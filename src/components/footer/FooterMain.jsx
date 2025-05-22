const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experiance" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];
const FooterMain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="justify-between mt-4 md:flex sm:hidden max-w-[1200px] mx-auto">
        <p className="text-3xl text-lightGrey">Marzia Yarzada</p>
        <ul className="flex gap-4 text-xl text-lightGrey">
          {links.map((item, index) => {
            return <li key={index}><a href="#" className="transition-all duration-500 cursor-pointer hover:text-white">{item.link}</a></li>;
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown"> © 2024 MarziaYarzada | All Rights Reserved.</p>
    </div>
  );
};

export default FooterMain;
