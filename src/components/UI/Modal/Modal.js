import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { formEditAction } from "../../../store/index";
import { motion, AnimatePresence } from "framer-motion";
const backdrop ={
    visible: {opacity: 1},
    hidden: {opacity: 0}
}
const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "5vh",
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
const Backdrop = (props) => {
  return <motion.div variants={backdrop} initial="hidden" animate="visible" exit={`hidden`} className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverLay = (props) => {
  return (
    <motion.div variants={dropIn} initial="hidden" animate="visible" exit={`exit`} className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </motion.div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onClose={props.onClose} />,
          portalElement
        )}
        {ReactDOM.createPortal(
          <ModalOverLay>{props.children}</ModalOverLay>,
          portalElement
        )}
      </Fragment>
    </AnimatePresence>
  );
};

export default Modal;
