import "./index.css";
import Sidebar from "./components/UI/sidebar";
import Main from "./components/UI/Main";
import { BackgroundBeamsWithCollision } from "./components/UI/background-beams-with-collision";

function App() {
  return (
    <div id="root" className="flex h-full relative">
      <BackgroundBeamsWithCollision className="absolute inset-0 -z-10 h-full w-full">
        <div className="p-4 flex flex-col items-start">
          <p className="font-semibold text-6xl">
            <span className = "greet">Hello, Dev</span>
          </p>
          <p className="font-semibold text-3xl">How can I help you today?</p>
        </div>
      </BackgroundBeamsWithCollision>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
