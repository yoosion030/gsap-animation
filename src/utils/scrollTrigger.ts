import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const scrollTrigger = (targets: gsap.TweenTarget, vars: gsap.TweenVars) => {
  gsap.registerPlugin(ScrollTrigger);

  return gsap.to(targets, vars);
};

export default scrollTrigger;
