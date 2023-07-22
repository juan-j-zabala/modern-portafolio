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
        <HiMenuAlt4
          className={`${tailwindclass.cssnavbar.svgcss}`}
          onClick={() => setToggle(true)}
        />
        {toggle ? (
          <motion.div
            className={`${tailwindclass.cssnavbar.divcss2}`}
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX
              className={`${tailwindclass.cssnavbar.svgcss2}`}
              onClick={() => setToggle(false)}
            />
            <ul className={`${tailwindclass.cssnavbar.app__navbar_links2}`}>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li className="m-4" key={item}>
                  <a
                    className={`${tailwindclass.cssnavbar.acss2}`}
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
