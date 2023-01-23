import { useState } from "react";
import SideNav from "./components/Sidenav";
import ChatBox from "./components/ChatBox";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <main>
        <SideNav />
        <ChatBox />
      </main>
    </div>
  );
}

export default App;
