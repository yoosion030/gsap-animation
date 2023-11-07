import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const scrollTrigger = (targets: string, vars: gsap.TweenVars) => {
  gsap.registerPlugin(ScrollTrigger);

  return gsap.to(targets, { scrollTrigger: { trigger: targets }, ...vars });
};

export default scrollTrigger;
