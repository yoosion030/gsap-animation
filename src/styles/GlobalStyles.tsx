"use client";

import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        html,
        * {
          font-family: "Pretendard Variable", Pretendard, -apple-system,
            BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
            "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
          color: #ffffff;
        }

        body::-webkit-scrollbar {
          width: 16px;
        }

        body::-webkit-scrollbar-thumb {
          background-color: #ffffff;
          border-radius: 10px;
          height: 56px;
          background-clip: content-box;
        }

        body::-webkit-scrollbar-thumb:hover {
          background-color: #cbcbcb;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        button {
          font-family: "Pretendard Variable", sans-serif;
        }

        input {
          font-family: "Pretendard Variable", sans-serif;
        }
      `}
    />
  );
}
