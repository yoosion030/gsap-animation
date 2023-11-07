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
          color: inherit;
        }

        body {
          -ms-overflow-style: none;
        }

        ::-webkit-scrollbar {
          display: none;
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
