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
    <img
        alt="lordly logo"
        src={require.resolve("./logo.svg")}
        css={{
        marginLeft: "50px",
        marginRight: "20px",
        width: "300px",
        height: "393px"
        }}
    />
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