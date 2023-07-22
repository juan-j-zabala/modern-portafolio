import { motion } from "framer-motion";
import { images } from "../../constants";
import tailwindclass from "../../styles/tailwindclass";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${tailwindclass.cssnavbar.app__navbar}`}>
      <div className={`${tailwindclass.cssnavbar.app__navbar_log}`}>
        <img
          className={`${tailwindclass.cssnavbar.imgcss}`}
          src={images.logo}
          alt="logo"
        />
      </div>
      <ul className={`${tailwindclass.cssnavbar.app__navbar_links}`}>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li
            className={`${tailwindclass.cssnavbar.licss}`}
            key={`link-${item}`}
          >
            <div className={`${tailwindclass.cssnavbar.divcss}`} />
            <a className={`${tailwindclass.cssnavbar.acss}`} href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className={`${tailwindclass.cssnavbar.app__navbar_menu}`}>
        <HiMenuAlt4 className={`${tailwindclass.cssnavbar.svgcss}`} onClick={() => setToggle(true)} />
        {toggle ? (
          <motion.div
            className={`fixed top-0 bottom-0 right-0 z-[5] p-4 w-4/5 h-screen flex justify-end items-end flex-col bg-bgWhite bg-skin-white-color bg-cover bg-repeat shadow-ligthshadow ${tailwindclass.cssnavbar.divcss2}`}
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX className="w-[35px] h-[35px] text-skin-secondary-color my-2 mx-2 " onClick={() => setToggle(false)} />
            <ul className="list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col ">

            {["home", "about", "work", "skills", "contact"].map((item) => (
              <li
              key={item}
              >
                <a
                  href={`#${item}`}
                  onClick={() => setToggle(false)}
                  >
                  {item}
                </a>
              </li>
            ))}
            </ul>
          </motion.div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
