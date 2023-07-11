import { motion } from "framer-motion";
const Certificates = () => {
  return (
    <motion.section
      className="page-container"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
    >
      Certificates
    </motion.section>
  );
};

export default Certificates;
