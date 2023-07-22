import { motion } from "framer-motion";
import { images } from "../../constants";
import tailwindclass from "../../styles/tailwindclass";

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
    <div
      className={`relative bg-bgIMG bg-cover bg-repeat bg-center idhome  flex-1 w-full h-full flex-row pt-24 pb-24 px-0 3xl:pt-32 max-[1200px]:flex-col max-[450px]:pt-24 max-[450px]:pb-4 max-[450px]:px-8 ${tailwindclass.cssheader.app__header}`}
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={` ${tailwindclass.cssheader.app__header_info}`}
      >
        <div className="app__header_badge">
          <div className="badge_cmp flex justify-center items-center">
            <span>👋🏻</span>
            <div className="ml-5">
              <p className="text-sm text-left text-skin-gray-color leading-6 3xl:text-[1.75rem] ">
                Hello I am
              </p>
              <h1 className="text-[2.75rem] font-extrabold text-center text-skin-black-color capitalize [&>span]:text-skin-secondary-color 3xl:text-[4rem] msm:text-[2rem] ">
                Micael
              </h1>
            </div>
          </div>
          <div className="tag_cmp flex justify-center items-center">
            <p className="text-sm text-left text-skin-gray-color leading-6 3xl:text-[1.75rem] ">
              Web Developer
            </p>
            <p className="text-sm text-left text-skin-gray-color leading-6 3xl:text-[1.75rem] ">
              Freelancer
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header_img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header_circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div
            className="cicle_cmp flex justify-center items-center"
            key={`circle-${index}`}
          >
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
