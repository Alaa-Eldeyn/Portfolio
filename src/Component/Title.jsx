import { motion } from "framer-motion";

const Title = (title) => {
  return (
    <motion.div
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      exit={{ y: -150 }}
      data-title={title.title}
      className="title"
    >
      <h1 className="fw-bold">{title.title}</h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 100 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 250 }}
        exit={{ width: 0, opacity: 0 }}
        className="title-underline rounded"
      ></motion.div>
    </motion.div>
  );
};

export default Title;
