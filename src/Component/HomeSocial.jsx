import { Link } from "react-router-dom";
import { social } from "../data";
import { motion } from "framer-motion";

const HomeSocial = () => {
  const welcomeTitle = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="social-home position-absolute d-none d-lg-flex flex-column gap-4">
      {social.map((item,index) => {
        return (
          <motion.span
            key={item.id}
            variants={welcomeTitle}
            initial={"hidden"}
            animate={"visible"}
            transition={{ delay: 0.25 + index * 0.03 }}
            exit={{ x: "100%", opacity: 0 }}
          >
            <Link to={item.link} className="fs-3 p-2 rounded">
              {item.icon}
            </Link>
          </motion.span>
        );
      })}
    </div>
  );
};

export default HomeSocial;
