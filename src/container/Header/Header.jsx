import { motion } from "framer-motion";
import { images } from "../../constants";
import tailwindclass from "../../styles/tailwindclass";
import { AppWrapp } from "../../wrapper";
// import AppWrapp from "../../wrapper/AppWrapp";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className={` ${tailwindclass.cssheader.app__header}`}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${tailwindclass.cssheader.app__header_info}`}
      >
        <div className={`${tailwindclass.cssheader.app__header_badge}`}>
          <div className={`${tailwindclass.cssheader.badge_cmp}`}>
            <span className={`${tailwindclass.cssheader.span}`}>👋🏻</span>
            <div className="ml-5">
              <p className={`${tailwindclass.cssheader.p}`}>Hello I am</p>
              <h1 className={`${tailwindclass.cssheader.h1}`}>Micael</h1>
            </div>
          </div>
          <div className={`${tailwindclass.cssheader.tag_cmp}`}>
            <p className={`${tailwindclass.cssheader.p2}`}>Web Developer</p>
            <p className={`${tailwindclass.cssheader.p2}`}>Freelancer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={`${tailwindclass.cssheader.app__header_img}`}
      >
        <img
          className="w-full object-contain z-10"
          src={images.profile}
          alt="profile_bg"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`${tailwindclass.cssheader.overlay_circle}`}
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={`${tailwindclass.cssheader.app__header_circles}`}
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div
            className={`${tailwindclass.cssheader.div}`}
            key={`circle-${index}`}
          >
            <img className="w-3/5 h-3/5" src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapp(Header,'home');
