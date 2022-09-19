import React from "react";
import { Typography, AppBar } from "@mui/material";
import styled from "styled-components";

import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

function App() {
  return (
    <Main>
      <AppBar className="app-bar" position="static" color="inherit">
        <Typography className="title" variant="h2" align="center">
          Face Chat
        </Typography>
      </AppBar>

      <VideoPlayer />

      <Options>
        <Notifications />
      </Options>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .app-bar {
    border-radius: 15px;
    margin: 30px 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 600px;
    color: white;
    font-family: "Raleway", sans-serif;

    //Make the bar glass effect
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.16);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.9px);
    -webkit-backdrop-filter: blur(3.9px);

    //Make transparent text
    .title {
      background: url(https://img.freepik.com/free-photo/woman-wearing-virtual-reality-simulator_23-2148910255.jpg?size=338&ext=jpg&uid=R67537973&ga=GA1.2.234872824.1663601219)
        no-repeat;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;

      font-weight: bold;
      background-size: cover;
    }
  }
`;
export default App;
