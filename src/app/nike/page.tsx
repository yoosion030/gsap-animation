"use client";

import styled from "@emotion/styled";

import { useEffect, useRef } from "react";
import scrollTrigger from "@/utils/scrollTrigger";

interface ImageTrigger {
  id: number;
  transform: string;
  xPercent?: number;
}

export default function Home() {
  const imageTrigger: ImageTrigger[] = [
    { id: 1, xPercent: -100, transform: "rotate(-70deg)" },
    { id: 2, xPercent: -40, transform: "rotate(0deg)" },
    { id: 3, xPercent: 100, transform: "rotate(-50deg)" },
    { id: 4, xPercent: 100, transform: "rotate(-50deg)" },
    { id: 5, transform: "rotate(220deg)" },
    { id: 6, transform: "rotate(10deg)" },
    { id: 7, xPercent: -10, transform: "rotate(100deg)" },
  ];
  useEffect(() => {
    const stickyTrigger = (
      targets: string,
      start: string,
      option?: gsap.TweenVars
    ) => {
      scrollTrigger(targets, {
        scrollTrigger: {
          trigger: targets,
          start,
          scrub: true,
        },
        position: "sticky",
        ...option,
      });
    };

    scrollTrigger(".box1", {
      scrollTrigger: {
        trigger: ".box1",
        start: "bottom center",
        scrub: true,
      },
      opacity: 0,
    });

    stickyTrigger(".box2", "center center", {
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

    imageTrigger.forEach(({ id, xPercent, transform }) => {
      scrollTrigger(`.img${id}`, {
        scrollTrigger: {
          trigger: `.img${id}`,
          start: "top bottom",
          scrub: true,
        },
        xPercent,
        transform,
      });
    });

    stickyTrigger(".box4", "center center");

    scrollTrigger(".bigimg", {
      scrollTrigger: {
        trigger: ".bigimg",
        start: "center center",
        scrub: true,
      },
      duration: 5,
      opacity: 1,
      xPercent: -130,
    });

    scrollTrigger(".title", {
      scrollTrigger: {
        trigger: ".title",
        start: "center center",
        scrub: true,
      },
      duration: 5,
      transform: "translate(260px, 0)",
      opacity: 1,
    });

    scrollTrigger(".line", {
      scrollTrigger: {
        trigger: ".line",
        start: "top center",
        scrub: true,
      },
      duration: 5,
      width: "80vw",
    });

    stickyTrigger(".box5", "center center");
    stickyTrigger(".box6", "top center");

    scrollTrigger(".background", {
      scrollTrigger: {
        trigger: ".background",
        start: "top center",

        scrub: true,
      },
      position: "sticky",
      duration: 1,
      width: "100vw",
      height: "100vh",
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
        {imageTrigger.map(({ id }) => (
          <img
            src={`/nike/나이키${id}.png`}
            className={`img${id}`}
            width="1000"
            key={id}
            alt={`나이키${id}`}
          />
        ))}
      </Section3>
      <Section4 className="box4">
        <img
          src="/nike/나이키빅로고.png"
          alt=""
          className="bigimg"
          width="1000"
        />
        <h2 className="title">누구보다 빠르게.</h2>
      </Section4>

      <Section5 className="box5">
        <Line className="line" />
      </Section5>
      <Section2></Section2>

      <Section6 className="box6">
        <img src="/nike/나이키배경.webp" alt="" className="background" />
      </Section6>
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

const Section5 = styled(Section)`
  height: 120vh;
`;

const Line = styled.hr`
  position: relative;
  width: 0px;
  background-color: #000000;
  margin: 0;
  top: 0px;
`;

const Section1 = styled(Section)``;

const Section2 = styled(Section)`
  position: relative;
`;

const Section3 = styled.section`
  position: relative;
  width: 100vw;
  background-color: #ffffff;
  overflow: hidden;
  height: 130vh;

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

const Section4 = styled.section`
  position: relative;
  background-color: #ffffff;
  text-align: center;
  top: 0;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 150px;
  font-weight: 900;

  .bigimg {
    width: 400px;
    opacity: 0.8;
  }

  .title {
    position: absolute;
    transform: translate(0px, 100px);
    opacity: 0;
  }
`;

const Section6 = styled.section`
  position: relative;
  height: 160vh;
  width: 100vw;
  background-color: black;
  z-index: 100;
  top: 0;
  display: flex;
  justify-content: center;
  padding-top: 50px;

  img {
    position: relative;
    height: 700px;
    top: 0;
  }
`;
