/** @jsx jsx */
import { jsx, Global } from "@emotion/react";
import { render } from "react-dom";

export default function App() {
  return (
    <div
      css={{
        backgroundColor: "#C8549C",
        width: "1200px",
        height: "630px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Sora:wght@300;600&display=swap");
          img {
            object-fit: contain;
          }
          h1 {
            font-family: Sora;
            font-weight: 600;
            font-size: 60px;
            text-align: center;
            margin: 0;
          }
          li {
            font-family: Sora;
            font-weight: 300;
            font-size: 48px;
            text-align: center;
            color: #787878;
          }
          h3 {
            margin-top: 25px;
            font-family: Sora;
            font-weight: 300;
            font-size: 36px;
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
        <img
          alt="lordly logo"
          src="untitled.svg"
          css={{
            marginLeft: "50px",
            marginRight: "20px",
            width: "300px",
            height: "393px"
          }}
        ></img>

        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "125px"
          }}
        >
          <h1>Building an OpenGraph image generation API 📷</h1>
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
          <h3>@lordprkr</h3>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("corgi"));