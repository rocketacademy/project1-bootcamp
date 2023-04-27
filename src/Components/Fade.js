import { motion } from "framer-motion";

const Fade = (props) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className={props.className ? props.className : undefined}
      id={props.idName ? props.idName : undefined}
    >
      {props.children}
    </motion.div>
  );
};

export default Fade;
