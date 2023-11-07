"use client";

import styled from "@emotion/styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useRef } from "react";

export const myAnimation = (comp: string, test: gsap.TweenVars) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({ defaults: { duration: 2, ease: "none" } });
  return gsap.to(comp, test);
};

export default function Home() {
  useEffect(() => {
    myAnimation(".box1", {
      scrollTrigger: {
        trigger: ".box1",
        // markers: true,
        start: "bottom center",
        scrub: true,
      },
      opacity: 0,
    });

    myAnimation(".box2", {
      scrollTrigger: {
        trigger: ".box2",
        // markers: true,
        start: "center center",
        scrub: true,
      },

      position: "sticky",

      onComplete: () => {
        if (textRef.current) {
          textRef.current.textContent = "네!";
        }
      },

      onUpdate: () => {
        if (textRef.current) {
          textRef.current.textContent = "네?";
        }
      },
    });

    myAnimation(".img1", {
      scrollTrigger: {
        trigger: ".img1",
        // markers: true,
        start: "top bottom",
        scrub: true,
      },
      xPercent: -100,
      transform: "rotate(-70deg)",
    });
    myAnimation(".img2", {
      scrollTrigger: {
        trigger: ".img2",
        // markers: true,
        start: "top bottom",
        scrub: true,
      },
      xPercent: -40,
      transform: "rotate(0deg)",
    });
    myAnimation(".img3", {
      scrollTrigger: {
        trigger: ".img3",
        // markers: true,
        start: "top bottom",
        scrub: true,
      },
      xPercent: 100,
      transform: "rotate(-50deg)",
    });

    myAnimation(".img4", {
      scrollTrigger: {
        trigger: ".img4",
        // markers: true,
        start: "top bottom",
        scrub: true,
      },
      xPercent: 100,
      transform: "rotate(-50deg)",
    });

    myAnimation(".img5", {
      scrollTrigger: {
        trigger: ".img5",
        // markers: true,
        start: "top bottom",
        scrub: true,
      },
      transform: "rotate(220deg)",
    });

    myAnimation(".img6", {
      scrollTrigger: {
        trigger: ".img6",
        // markers: true,
        start: "top bottom",
        scrub: true,
      },

      transform: "rotate(10deg)",
    });

    myAnimation(".img7", {
      scrollTrigger: {
        trigger: ".img7",
        // markers: true,
        start: "top bottom",
        scrub: true,
      },
      xPercent: -10,
      transform: "rotate(100deg)",
    });
  }, []);

  const textRef = useRef<any>();

  return (
    <MainSection>
      <Section1 className="box1">나이키세요?</Section1>
      <Section2 className="box2" ref={textRef}>
        네?
      </Section2>
      <Section2></Section2>
      <Section3 className="box3">
        <img src="/나이키.png" alt="" className="img1" width="1000" />
        <img src="/나이키2.png" alt="" className="img2" width="1000" />
        <img src="/나이키3.png" alt="" className="img3" width="1000" />
        <img src="/나이키4.png" alt="" className="img4" width="1000" />
        <img src="/나이키5.png" alt="" className="img5" width="1000" />
        <img src="/나이키6.png" alt="" className="img6" width="1000" />
        <img src="/나이키7.png" alt="" className="img7" width="1000" />
      </Section3>
    </MainSection>
  );
}

const MainSection = styled.main``;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  text-align: center;
  font-size: 200px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  overflow-x: hidden;
`;

const Section1 = styled(Section)``;

const Section2 = styled(Section)`
  position: relative;
`;

const Section3 = styled.section`
  position: relative;
  width: 100vw;
  background-color: #ffffff;
  overflow-x: hidden;
  height: 300vh;

  img {
    position: absolute;
  }
  .img1 {
    top: 300px;
    left: 500px;
    transform: rotate(150deg);
  }

  .img2 {
    top: 300px;
    left: 500px;
    transform: rotate(140deg);
  }

  .img3 {
    top: 900px;
    left: 700px;
    transform: rotate(140deg);
  }

  .img4 {
    top: 300px;
    left: 300px;
    transform: rotate(100deg);
  }

  .img5 {
    top: 300px;
    left: 300px;
    transform: rotate(140deg);
  }

  .img6 {
    top: 700px;
    left: 0px;
    transform: rotate(-210deg);
  }

  .img7 {
    top: 600px;
    left: 800px;
  }
`;
