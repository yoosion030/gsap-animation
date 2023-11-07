"use client";

import scrollTrigger from "@/utils/scrollTrigger";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    gsap.to(".title1", {
      transform: "translateX(500px)",
      duration: 1.3,
      color: "#00A1EF",
    });

    gsap.to(".title2", {
      transform: "translateX(750px)",
      duration: 1.5,
      color: "#F9C0C1",
    });

    gsap.to(".title3", {
      transform: "translateX(1000px)",
      duration: 1.7,
      color: "#8BF461",
    });

    gsap.to(".title4", {
      transform: "translateX(1250px)",
      duration: 1.9,
      color: "#FFD76A",
    });

    scrollTrigger(".box1", {
      scrollTrigger: {
        start: "top",
        // markers: true,
        scrub: true,
      },
      position: "sticky",
    });

    scrollTrigger(".box2", {
      scrollTrigger: {
        trigger: ".box2",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },

      duration: 2,
      onComplete: () => {
        gsap.to(".box3", { opacity: 1, duration: 0 });
      },

      onUpdate: () => {
        gsap.to(".box3", { opacity: 0, duration: 0 });
      },
    });

    scrollTrigger(".background", {
      scrollTrigger: {
        scrub: true,
        start: "2800px",
        end: "4444px",
        markers: true,
      },

      transform: "scale(0.2)",
      borderRadius: "150px",
    });

    scrollTrigger(".box4", {
      _scrollTrigger: {
        scrub: true,
        start: "center center",
        markers: true,
      },
      position: "sticky",

      onComplete: () => {
        gsap.to(".img", { opacity: 1, duration: 1 });
      },

      onUpdate: () => {
        gsap.to(".img", { opacity: 0, duration: 0 });
      },
    });
  }, []);
  return (
    <MainSection>
      <Section1 className="box1">
        <p className="title1">A</p>
        <p className="title2">S</p>
        <p className="title3">A</p>
        <p className="title4">P</p>
      </Section1>
      <Section2 className="box2">
        <h2>Animation + GSAP</h2>
        <p>
          gsap을 통해 <br /> 애니메이션을 구현해봐요.
        </p>
        <VideoSection>
          <VideoWrapper>
            <video src="/video/asap1.mp4" autoPlay muted loop />
          </VideoWrapper>
          <VideoWrapper>
            <video src="/video/asap2.mp4" autoPlay muted loop />
          </VideoWrapper>
          <VideoWrapper>
            <img src="/asap1.png" />
          </VideoWrapper>
          <VideoWrapper>
            <img src="/asap2.jpg" />
          </VideoWrapper>
        </VideoSection>
      </Section2>
      <Section3 className="box3">
        <img src="/asap배경.png" className="background" />
      </Section3>
      <Section1 />

      <Section1 />
      <Section4 className="box4">
        <img src="/asap2.jpg" className="img" />
        <img src="/asap2.jpg" className="img" />
      </Section4>
      <Section1 />
      <Section1 />
    </MainSection>
  );
}

const MainSection = styled.main`
  position: relative;
`;

const Section4 = styled.section`
  position: relative;
  display: flex;
  height: 100%;
  justify-content: center;

  font-size: 200px;
  font-weight: bold;
  color: white;
  overflow: hidden;

  /* background-color: yellow; */
  top: 0;

  img {
    position: relative;
    z-index: 100;
    top: 0px;
    opacity: 0;
    width: 100vw;
    height: 100vh;
    transform: scale(0.2);
    border-radius: 150px;
  }
`;

const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 250px;
  font-weight: bold;
  color: white;
  overflow: hidden;

  top: 0;

  p {
    transform: translateX(3000px);
    -webkit-text-stroke: 1px black;
  }
`;

const Section2 = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100vw;

  font-weight: bold;
  color: black;

  top: 0;
  background-color: white;
  position: relative;
  z-index: 2;

  padding: 190px 0;
  color: #212124;
  font-size: 60px;
  line-height: normal;
  text-align: center;

  p {
    color: #4d5159;
    font-size: 1.375rem;
    margin-top: 1.5rem;
    text-align: center;
    line-height: 1.5;
  }
`;

const VideoWrapper = styled.div`
  height: 450px;
  width: 450px;
  overflow: hidden;
  border-radius: 64px;

  video {
    height: 100%;
    margin: 0 auto;
    transform: translateX(-25%);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const VideoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 32px;
`;

const Section3 = styled.section`
  position: fixed;
  top: 0;
  height: 120vh;
  opacity: 0;
  background-color: white;
  img {
    width: 100vw;
    height: 100vh;
  }
`;
