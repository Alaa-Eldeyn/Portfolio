import { social } from "../data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const MobileHomeSocial = () => {
  const welcomeTitle = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="mobile-social-home d-lg-none d-flex justify-content-center align-items-center gap-3 mt-3">
      {social.map((item, index) => {
        return (
          <motion.span
            key={item.id}
            variants={welcomeTitle}
            initial={"hidden"}
            animate={"visible"}
            transition={{ delay: 0.3 + index * 0.03 }}
            exit={{ x: "-100%", opacity: 0 }}
          >
            <Link to={item.link} className="fs-2 p-2 rounded">
              {item.icon}
            </Link>
          </motion.span>
        );
      })}
    </div>
  );
};

export default MobileHomeSocial;
