import "./index.css";
import { useState } from "react";
import Sidebar from "./components/UI/sidebar";
import Main from "./components/UI/Main";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark', !darkMode);
    document.body.classList.toggle('dark', !darkMode); // Toggle body class for background
  };

  return (
    <div id="root" className="flex h-full relative">
      
      <Sidebar darkMode = {darkMode} toggleDarkMode = {toggleDarkMode} />
      <Main isDarkMode = {darkMode} />
    </div>
  );
}

export default App;
