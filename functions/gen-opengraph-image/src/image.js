/** @jsx jsx */
import { Global, jsx, css } from "@emotion/react";
import Textfit from "react-textfit";
import { render } from "react-dom";

function App() {
  return (
    <div
    css={{
      backgroundColor: "#C8549C",
      width: "1200px",
      height: "630px",
      display: "flex",
      alignItems: "center",
      position: "absolute"
    }}
  >
    <Global
        styles={css`
          * {
            box-sizing: "border-box";
            margin: 0;
            padding: 0;
            font-family: "system-ui";
          }
          img {
            object-fit: contain;
          }
          li {
            font-family: "system-ui";
            font-weight: 300;
            font-size: 48px;
            text-align: center;
            color: #787878;
          }
        `}
      />
    <div
      css={{
        backgroundColor: "white",
        width: "1200px",
        height: "570px",
        display: "flex",
        alignItems: "center"
      }}
    >
    <div>
    <svg
      width={48}
      height={1}
      viewBox="0 0 48 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"Rectangle 5"}</title>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 240 393"
        width={240}
        height={393}
        {...props}
      >
        <defs>
          <path
            d="M7.51 259.82c.13 4.05 1.89 7.86 4.56 10.91 3.25 3.71 9.11 10.45 14.66 17.05 6.85 8.14 12.31 17.37 15.92 27.37 8.19 22.68 34.14 70.92 106.67 70.94 5.52 0 10.97-1.16 16.01-3.4 20.74-9.19 71.29-40.52 61.56-124.83 0 0-20.5-1.27-39.25 44.87-3.53 8.68-11.46 14.88-20.79 15.68-19.95 1.72-55-4.24-87.1-54.87-6.93-10.94-16.99-19.68-29.18-24.08-9.22-3.32-19.79-4.79-28.5.29-2.92 4.02-14.98 6.85-14.56 20.07z"
            id="prefix__a"
          />
          <path
            d="M187.64 302.73c-3.53 8.68-11.45 14.88-20.79 15.68-15.46 1.34-39.98-1.95-65.18-27.06-.59.31-5.31 2.74-5.9 3.05 0 0 26.19 40.26 60.64 54.21 2.11.85 4.43.98 6.64.47 5.1-1.17 14.86-4.21 24.35-11.61 3.7-2.88 9.02.56 8.01 5.14-1.7 7.73-4.47 17.51-8.94 27.48 22.2-16.99 47.57-50.31 40.42-112.23-7.85 8.97-20.5-1.27-39.25 44.87z"
            id="prefix__b"
          />
          <path
            d="M53.43 213.94S17.02 206.59 4.9 238.3c-1.11 2.89.24 6.16 2.98 7.6 1.87.97 4.08.95 5.91-.08 5.82-3.24 17.5-11.58 29.68-1.98 0 0 20.3 13.75 36.49 34.79 6.37 8.27 13.12 16.23 20.71 23.4 13.76 12.99 34.98 29.92 56.49 35.05 1.64.39 3.35.25 4.94-.32 7.78-2.83 30.81-14.28 43.72-53.71 1.88-5.75 5.05-11.07 9.48-15.19 3.12-2.9 7.06-5.48 11.64-6.22 2.73-.45 4.54-3.07 3.8-5.73-1.44-5.18-5.07-12.38-14.18-14.66 0 0-1.04-18.82-18.6-25.83-6.54-1.16-39.21-6.94-98.02-17.35-17.97-10.58-33.47-5.29-46.51 15.87z"
            id="prefix__c"
          />
          <path
            d="M210.82 272.82c3.35-4.37 8.94-10.01 16.12-11.18 2.73-.45 4.54-3.07 3.8-5.73-1.44-5.18-5.07-12.38-14.18-14.66 0 0-1.04-18.82-18.6-25.83-1.08-.19-6.45-1.14-16.11-2.85-9.07 17.65-14.11 27.46-15.12 29.42 13.63 2.52 16.43 12.09 16.77 18.27.18 3.28 1.87 6.22 4.57 8.09 15.14 10.49 8.97 32.22 6.12 40.03 4.38-6.98 8.5-15.57 11.9-26.17 1.08-3.36 2.59-6.58 4.73-9.39z"
            id="prefix__e"
          />
          <path
            d="M152.69 278.72h6.75s-2.29-22.32 14.14-36.01v-2.96h-45.44c15.65 10.35 23.83 23.34 24.55 38.97z"
            id="prefix__f"
          />
          <path
            d="M61.17 115.68v37.75s-.64 9.96-8.03 10.61c0 0-3.5.49-6.44-1.46-2.99-1.99-6.95-.07-7.29 3.51-.34 3.53.01 7.78 1.94 12.44 1.71 4.14 4.53 7.76 7.97 10.64 8.23 6.9 27.02 17.24 56.79 4.1V88.04H79.8c-12.42 4.62-18.63 13.83-18.63 27.64z"
            id="prefix__g"
          />
          <path
            d="M194.93 161.81v-29.34h3.56c8.1 0 14.67 6.57 14.67 14.67 0 8.11-6.57 14.67-14.67 14.67h-3.56z"
            id="prefix__h"
          />
          <path d="M197.96 88.04v118.29h-95.11V88.04h95.11z" id="prefix__i" />
          <path
            d="M167.03 101.06c6.48 0 11.73 5.25 11.73 11.73v93.54h19.2V88.04h-77.03v13.02h46.1z"
            id="prefix__k"
          />
          <path
            d="M148.38 115.68a4.31 4.31 0 100 8.62 4.31 4.31 0 000-8.62z"
            id="prefix__l"
          />
          <path
            d="M185.56 115.68a4.31 4.31 0 100 8.62 4.31 4.31 0 000-8.62z"
            id="prefix__m"
          />
          <path
            d="M51.07 190.56c8.99 6.76 27.22 14.99 55.04 2.71v-39.19H89.44c-25.55 24.32-38.34 36.48-38.37 36.48z"
            id="prefix__n"
          />
          <path
            d="M109.6 124.3v47.27c0 6.71 2.84 13.26 8.14 17.38 3.12 2.42 7.25 4.53 12.61 5.28 2.32.33 4.47-1.24 5.07-3.51 1.93-7.37 8.59-23.17 30.59-26.8 7.35-1.22 14.97-.73 21.9 2.03 8.72 3.47 18.99 11.23 19.41 28.58 0 28.31-22.95 51.26-51.26 51.26h-9.03c-28.31 0-51.26-22.95-51.26-51.26V88.04h29c3.15 17.61-1.91 29.69-15.17 36.26z"
            id="prefix__o"
          />
          <path
            d="M95.77 161.81v-29.34h-3.56c-8.1 0-14.67 6.57-14.67 14.67 0 8.11 6.57 14.67 14.67 14.67h3.56z"
            id="prefix__p"
          />
          <path
            d="M171.87 150.97c-2.84 0-5.13-2.3-5.13-5.13a5.13 5.13 0 015.13-5.14h8.64c2.84 0 5.14 2.3 5.14 5.14 0 2.83-2.3 5.13-5.14 5.13h-8.64z"
            id="prefix__q"
          />
          <path
            d="M187.91 165.95c-2.95-1.17-6.02-1.91-9.15-2.31.1.2 21.4 44.59 1.43 76.11 16.14-8.63 27.13-25.64 27.13-45.22-.43-17.35-10.69-25.11-19.41-28.58z"
            id="prefix__r"
          />
          <path
            d="M105.38 33.64a23.76 23.76 0 012.44-4.5c1.05-1.52 1.08-3.51.01-5.02-3.06-4.26-5.85-9.14-7.77-12.7-1.1-2.06-4.06-2.06-5.17 0-1.91 3.56-4.71 8.44-7.76 12.7-1.08 1.51-1.05 3.5 0 5.02.79 1.13 1.68 2.64 2.44 4.5 3.22 7.84.23 17.16-7.4 20.85-2.75 1.33-8.45 2.5-13.06 2.5.14 1.07.85 6.42 2.13 16.05h52.47a17179 17179 0 012.52-17.2c-4.62 0-10.7-.02-13.45-1.35-7.63-3.69-10.61-13.01-7.4-20.85z"
            id="prefix__s"
          />
          <path
            d="M106.11 101.06V88.04H79.8s-9.41 3.54-14.85 13.02h41.16z"
            id="prefix__t"
          />
          <path
            d="M124.77 88.04h-29v13.02h29.06c-.03-6.94-.05-11.28-.06-13.02z"
            id="prefix__u"
          />
          <path
            d="M180.53 33.64c.76-1.86 1.65-3.37 2.44-4.5 1.05-1.52 1.08-3.51 0-5.02-3.05-4.26-5.85-9.14-7.76-12.7-1.11-2.06-4.07-2.06-5.17 0-1.92 3.56-4.71 8.44-7.77 12.7-1.07 1.51-1.04 3.5.01 5.02.78 1.13 1.67 2.64 2.43 4.5 3.22 7.84.24 17.16-7.39 20.85-2.75 1.33-8.45 2.5-13.07 2.5.14 1.07.86 6.42 2.14 16.05h52.47a17179 17179 0 012.52-17.2c-4.62 0-10.7-.02-13.45-1.35-7.63-3.69-10.62-13.01-7.4-20.85z"
            id="prefix__v"
          />
          <path
            d="M195.57 30.53c1.16 1.69 2.51 3.97 3.63 6.78 4.39 11.03-.26 24.62-11 29.67-3.9 1.83-8.92 3.04-15.39 3.04-6.61 0-11.71-1.27-15.65-3.17-10.93-5.29-15.2-18.64-10.59-29.87 1.08-2.65 2.37-4.82 3.49-6.44a6.283 6.283 0 00-.04-7.25c-4.99-6.97-9.49-15.07-12.18-20.21-1.1-2.1-4.1-2.1-5.2 0-2.69 5.13-7.18 13.22-12.16 20.19a6.297 6.297 0 00-.05 7.28 33.82 33.82 0 013.61 6.74c4.48 11.22.13 24.33-10.75 29.57-3.93 1.9-9.03 3.16-15.62 3.16-6.41 0-11.4-1.19-15.29-3-10.81-5.03-15.5-18.63-11.09-29.71 1.12-2.81 2.46-5.09 3.63-6.78 1.52-2.2 1.5-5.08-.06-7.26-3.47-4.86-6.71-10.26-9.26-14.83-1.48-2.64-5.51-1.57-5.51 1.46v76.03c0 4.13 3.35 7.48 7.48 7.48h135.34c4.13 0 7.48-3.35 7.48-7.48V9.9c0-3.03-4.03-4.1-5.51-1.46-2.55 4.57-5.79 9.98-9.26 14.83a6.282 6.282 0 00-.05 7.26z"
            id="prefix__w"
          />
          <path
            d="M210.39 85.93V9.9c0-3.03-4.03-4.1-5.51-1.46-2.55 4.57-5.79 9.98-9.26 14.84a6.266 6.266 0 00-.05 7.25c1.16 1.69 2.51 3.97 3.63 6.78 4.39 11.03-.26 24.62-11 29.67-3.9 1.83-8.92 3.04-15.39 3.04-6.61 0-11.71-1.27-15.65-3.17-10.93-5.29-15.2-18.64-10.59-29.87 1.08-2.65 2.37-4.82 3.49-6.44a6.283 6.283 0 00-.04-7.25c-4.99-6.97-9.49-15.07-12.18-20.2a2.895 2.895 0 00-2.6-1.59v80.79s-.38 11.12 12.65 11.12h55.02c4.98-2.23 7.48-4.72 7.48-7.48z"
            id="prefix__x"
          />
          <path
            d="M171.9 292.86c0 10.17-7.27 18.4-16.24 18.4-8.96 0-16.23-8.23-16.23-18.4 0-10.16 7.27-18.39 16.23-18.39 8.97 0 16.24 8.23 16.24 18.39z"
            id="prefix__y"
          />
          <path
            d="M155.47 291.11c-.55 3.18-3.28 5.35-6.08 4.86-2.8-.49-4.62-3.46-4.07-6.64.56-3.17 3.28-5.35 6.09-4.86 2.8.49 4.62 3.47 4.06 6.64z"
            id="prefix__z"
          />
          <linearGradient
            id="prefix__d"
            gradientUnits="userSpaceOnUse"
            x1={114.77}
            y1={271.6}
            x2={167.88}
            y2={-141.47}
          >
            <stop offset="0%" stopColor="#cc5697" />
            <stop offset="100%" stopColor="#8e3979" />
          </linearGradient>
          <linearGradient
            id="prefix__j"
            gradientUnits="userSpaceOnUse"
            x1={150.4}
            y1={181.34}
            x2={150.4}
            y2={11.74}
          >
            <stop offset=".51%" stopColor="#ffc3b0" />
            <stop offset="100%" stopColor="#e8897b" />
          </linearGradient>
        </defs>
        <use xlinkHref="#prefix__a" fill="#59e1ff" />
        <use
          xlinkHref="#prefix__a"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
        <use xlinkHref="#prefix__b" fill="#30a7ea" />
        <use
          xlinkHref="#prefix__b"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
        <use xlinkHref="#prefix__c" fill="url(#prefix__d)" />
        <use
          xlinkHref="#prefix__c"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
        <use xlinkHref="#prefix__e" fill="#a03774" />
        <use
          xlinkHref="#prefix__e"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
        <use xlinkHref="#prefix__f" fill="#a03774" />
        <use
          xlinkHref="#prefix__f"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
        <use xlinkHref="#prefix__g" fill="#e6e6f8" />
        <use
          xlinkHref="#prefix__g"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
        <use xlinkHref="#prefix__h" fill="#c66760" />
        <use
          xlinkHref="#prefix__h"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
        <use xlinkHref="#prefix__i" fill="url(#prefix__j)" />
        <use
          xlinkHref="#prefix__i"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
        <use xlinkHref="#prefix__k" fill="#e8897b" />
        <use
          xlinkHref="#prefix__k"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
        <use xlinkHref="#prefix__l" fill="#333345" />
        <use
          xlinkHref="#prefix__l"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
        <use xlinkHref="#prefix__m" fill="#333345" />
        <use
          xlinkHref="#prefix__m"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
        <use xlinkHref="#prefix__n" fill="#b3b3c5" />
        <use
          xlinkHref="#prefix__n"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
        <g>
          <use xlinkHref="#prefix__o" fill="#e6e6f8" />
          <use
            xlinkHref="#prefix__o"
            fillOpacity={0}
            stroke="#000"
            strokeOpacity={0}
          />
        </g>
        <g>
          <use xlinkHref="#prefix__p" fill="#e8897b" />
          <use
            xlinkHref="#prefix__p"
            fillOpacity={0}
            stroke="#000"
            strokeOpacity={0}
          />
        </g>
        <g>
          <use xlinkHref="#prefix__q" fill="#e8897b" />
          <use
            xlinkHref="#prefix__q"
            fillOpacity={0}
            stroke="#000"
            strokeOpacity={0}
          />
        </g>
        <g>
          <use xlinkHref="#prefix__r" fill="#b3b3c5" />
          <use
            xlinkHref="#prefix__r"
            fillOpacity={0}
            stroke="#000"
            strokeOpacity={0}
          />
        </g>
        <g>
          <use xlinkHref="#prefix__s" fill="#ad6d2a" />
          <use
            xlinkHref="#prefix__s"
            fillOpacity={0}
            stroke="#000"
            strokeOpacity={0}
          />
        </g>
        <g>
          <use xlinkHref="#prefix__t" fill="#b3b3c5" />
          <use
            xlinkHref="#prefix__t"
            fillOpacity={0}
            stroke="#000"
            strokeOpacity={0}
          />
        </g>
        <g>
          <use xlinkHref="#prefix__u" fill="#b3b3c5" />
          <use
            xlinkHref="#prefix__u"
            fillOpacity={0}
            stroke="#000"
            strokeOpacity={0}
          />
        </g>
        <g>
          <use xlinkHref="#prefix__v" fill="#ad6d2a" />
          <use
            xlinkHref="#prefix__v"
            fillOpacity={0}
            stroke="#000"
            strokeOpacity={0}
          />
        </g>
        <g>
          <use xlinkHref="#prefix__w" fill="#ffca95" />
          <use
            xlinkHref="#prefix__w"
            fillOpacity={0}
            stroke="#000"
            strokeOpacity={0}
          />
        </g>
        <g>
          <use xlinkHref="#prefix__x" fill="#fbb04d" />
          <use
            xlinkHref="#prefix__x"
            fillOpacity={0}
            stroke="#000"
            strokeOpacity={0}
          />
        </g>
        <g>
          <use xlinkHref="#prefix__y" fill="#fbb04d" />
          <use
            xlinkHref="#prefix__y"
            fillOpacity={0}
            stroke="#000"
            strokeOpacity={0}
          />
        </g>
        <g>
          <use xlinkHref="#prefix__z" fill="#ffca95" />
          <use
            xlinkHref="#prefix__z"
            fillOpacity={0}
            stroke="#000"
            strokeOpacity={0}
          />
        </g>
      </svg>
    </svg>
    </div>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "125px"
        }}
      >
        <h1
          css={{
            fontWeight: "600",
            fontSize: "60px",
            textAlign: "center",
            margin: "0"
          }}
        >
          Building an OpenGraph image generation API
        </h1>
        <ul
          css={{
            display: "flex",
            listStyleType: "none",
            "& li": {
              marginRight: ".5rem",
              "&:not(:last-child):after": {
                content: "'|'",
                marginLeft: ".5rem"
              }
            },
            justifyContent: "center",
            marginTop: "10px"
          }}
        >
          <li>react</li>
          <li>serverless</li>
          <li>figma</li>
        </ul>
        <h3
          css={{
            marginTop: "25px",
            fontWeight: "300",
            fontSize: "36px",
            textAlign: "center",
            color: "#787878"
          }}
        >
          @lordprkr
        </h3>
      </div>
    </div>
  </div>
  );
}

render(<App />, document.getElementById("corgi"));