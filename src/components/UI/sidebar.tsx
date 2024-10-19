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

const Sidebar = ({darkMode, toggleDarkMode}: any) => {
  const [expanded, setExpanded] = useState(false);
  

  return (
    <div className={`${darkMode && expanded ? 'sidebar-div-dark' : ''} ${expanded ? "sidebar-div" : "sidebar overflow-auto h-max-100"}`}>
      <div className="top">
        <div className="menu" onClick={() => setExpanded(prev => !prev)}>
          <Menu />
        </div>

        {expanded ? (
          <div className="flex cursor-pointer rounded-3xl p-3 hover:bg-slate-500">
            <div className="sub_icons mr-2 pl-1 py-1">
              <Plus />
            </div>
             <p className="pr-1 py-1">New chat</p>
          </div>
        ) : null}

        {expanded ? (
          <div>
            <p className="mb-4">Recent Chats</p>
            <div className="sub_icons ml-3 flex rounded-lg p-2 hover:bg-slate-500">
              <Message />
              <p className="ml-2">Who is the president...</p>
            </div>
          </div>
        ) : null}
      </div>

      {expanded ? (
        <div className="bottom">
          <div className="">
            <div className="sub_icons hover:bg-slate-500">
              <Help />
              <button>Help</button>
            </div>
          </div>

          <div className="">
            <div className="sub_icons hover:bg-slate-500">
              <History />
              <button>Activity</button>
            </div>
          </div>

          <div className="">
            <div className="sub_icons hover:bg-slate-500">
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
