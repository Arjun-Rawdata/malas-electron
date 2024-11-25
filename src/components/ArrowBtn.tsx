import { icon } from "../utils/assets";
import { cn } from "../utils/cn";
import { motion } from "framer-motion";

type BtnProps = {
  tilted?: boolean;
};

function ArrowBtn(props: BtnProps) {
  const { tilted = false } = props;
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
      className={cn(
        "bg-primary w-[117px] h-[122px] rounded-custom-small flex flex-col justify-center items-center shadow-custom-shadow",
        { "-rotate-90": !tilted }
      )}
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
            src={icon("downArrow")}
            alt="Arrow icon"
            width={47.56}
            height={27.16}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default ArrowBtn;
