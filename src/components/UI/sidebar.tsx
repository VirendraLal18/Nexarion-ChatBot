import {
  Menu,
  Help,
  History,
  Message,
  Plus,
  Setting,
} from "../../Icons/sidebarIcons";
import "../../App.css";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark', !darkMode);
    document.body.classList.toggle('dark', !darkMode); // Toggle body class for background
  };

  return (
    <div className={`${darkMode && expanded ? 'sidebar-div-dark' : ''} ${expanded ? "sidebar-div" : "sidebar overflow-auto h-max-100"}`}>
      <div className="top">
        <div className="menu" onClick={() => setExpanded(prev => !prev)}>
          <Menu />
        </div>

        {expanded ? (
          <div className="flex cursor-pointer rounded-3xl p-3">
            <div className="sub_icons mr-2 pl-1 py-1">
              <Plus />
            </div>
            {expanded ? <p className="pr-1 py-1">New chat</p> : null}
          </div>
        ) : null}

        {expanded ? (
          <div>
            <p className="mb-4">Recent Chats</p>
            <div className="sub_icons ml-3 flex rounded-lg p-2 hover:bg-slate-300">
              <Message />
              <p className="ml-2">Who is the president...</p>
            </div>
          </div>
        ) : null}
      </div>

      {expanded ? (
        <div className="bottom">
          <div className="">
            <div className="sub_icons">
              <Help />
              <button>Help</button>
            </div>
          </div>

          <div className="">
            <div className="sub_icons">
              <History />
              <button>Activity</button>
            </div>
          </div>

          <div className="">
            <div className="sub_icons">
              <Setting />
              <button>Setting</button>
            </div>
          </div>

          <div className={`${darkMode ? "bg-slate-600 drop-shadow-xl rounded-xl" :"bg-slate-300 drop-shadow-xl rounded-xl "}`}>
            <ThemeToggle toggleDarkMode={toggleDarkMode} isDarkMode={darkMode} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
