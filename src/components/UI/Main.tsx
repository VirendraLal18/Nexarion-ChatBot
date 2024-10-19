import { AnimatedTooltip } from "./animated-user";
import { items } from "../../assets/items";
import code from "../../assets/code.png";
import idea from "../../assets/idea.png";
import books from "../../assets/books.png";
import interview from "../../assets/interview.png"
import "../../App.css";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";

function Main({ isDarkMode }: any) {
  // const [profilePadding, setProfilePadding] = useState(false)

  return (
    <>
      <div
        className={"flex justify-between w-full p-7 overflow-auto flex-grow"}
      >
        <h1 className="text-2xl font-medium  rounded-xl h-min p-1 hover:bg-slate-500 cursor-pointer">
          Nexarion
        </h1>
        <div className="hover:pr-10">
          <AnimatedTooltip items={items} />
        </div>
      </div>

      <BackgroundBeamsWithCollision className="absolute inset-0 -z-10 h-full w-full">
        <div className="p-4 flex flex-col items-center">
          <p className="font-semibold text-6xl">
            <span className="greet">Hello, Dev</span>
          </p>
          <p className="font-semibold text-3xl">How can I help you today?</p>
          <div className="flex justify-between gap-4 overflow-x-auto no-scrollbar py-5 px-2">
            <div
              className={`${
                isDarkMode
                  ? "bg-gray-500 bg-opacity-30 h-auto w-auto flex flex-col items-start p-2 rounded-2xl"
                  : "bg-gray-500 bg-opacity-30 h-auto w-auto flex flex-col items-start p-2 rounded-2xl shadow-custom-dark"
              } max-w-xs `}
            >
              <div className="flex gap-1 mb-2">
                <img src={idea} alt="" className="h-10" />
                <p className="font-normal text-3xl">Idea</p>
              </div>

              <p className="opacity-100">Brainstorm a team project idea.</p>
            </div>

            <div
              className={`${
                isDarkMode
                  ? "bg-gray-500 bg-opacity-30 h-auto flex flex-col items-start p-4 rounded-2xl"
                  : "bg-gray-500 bg-opacity-30 h-auto w-auto flex flex-col items-start p-4 rounded-2xl shadow-custom-dark"
              } max-w-xs`}
            >
              <div className="flex gap-2 mb-2">
                <img src={code} alt="" className="h-10" />
                <p className="font-normal text-3xl">Code</p>
              </div>

              <p>Write code or algorithms for complex applications.</p>
            </div>
          </div>
          <div className="flex justify-between gap-4 overflow-x-auto no-scrollbar py-2 px-2">
            <div
              className={`${
                isDarkMode
                  ? "bg-gray-500 bg-opacity-30 h-auto flex flex-col items-start p-4 rounded-2xl"
                  : "bg-gray-500 bg-opacity-30 h-auto w-auto flex flex-col items-start p-4 rounded-2xl shadow-custom-dark"
              } max-w-xs`}
            >
              <div className="flex gap-2 mb-2">
                <img src={books} alt="" className="h-10" />
                <p className="font-normal text-3xl">Books</p>
              </div>

              <p>Recommend books for personal development.</p>
            </div>

            <div
              className={`${
                isDarkMode
                  ? "bg-gray-500 bg-opacity-30 h-auto flex flex-col items-start p-4 rounded-2xl"
                  : "bg-gray-500 bg-opacity-30 h-auto auto flex flex-col items-start p-4 rounded-2xl shadow-custom-dark"
              } max-w-xs`}
            >
              <div className="flex gap-2 mb-2">
                <img src={interview } alt="" className="h-10" />
                <p className="font-normal text-3xl">Tips</p>
              </div>

              <p>Help me with tips for job interviews.</p>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}

export default Main;
