import { icon } from "../utils/assets";
import { motion } from "framer-motion";

function RoundArrowButton() {
  const arr = [0.6, 0.8, 1];

  const arrowTransition = {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeInOut",
    repeat: Infinity,
  };

  const arrowAnimate = {
    opacity: [0.5, 1],
  };

  return (
    <div
      className="
        w-14 h-14 bg-primary-white rounded-full flex items-center justify-center shadow-custom-shadow"
    >
      {arr.map((num) => (
        <motion.div
          transition={{
            ...arrowTransition,
            delay: num * 0.6,
          }}
          style={{ opacity: 0.5 }}
          animate={arrowAnimate}
          key={num}
        >
          <img
            className="h-[20.88px] w-[11.48px]"
            src={icon("rightArrowDark")}
            alt="Arrow indicating next step"
            height={20.88}
            width={11.48}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default RoundArrowButton;
