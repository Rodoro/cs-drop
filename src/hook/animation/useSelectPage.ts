import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

export default function useSelectPage(isOpen: boolean) {
    const [scope, animate] = useAnimate();
  
    useEffect(() => {
      animate(
        "ul",
        {
          clipPath: isOpen
            ? "inset(0% 0% 0% 0% round 10px)"
            : "inset(10% 50% 90% 50% round 10px)",
        },
        {
          type: "spring",
          bounce: 0,
          duration: 0.5,
        }
      );
  
      animate(
        "li",
        isOpen
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.3, filter: "blur(5px)" },
        {
          duration: 0.2,
          delay: isOpen ? staggerMenuItems : 0,
        }
      );
    },  [animate]);
  
    return scope;
  }