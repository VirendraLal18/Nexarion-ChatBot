import { AnimatedTooltip } from "./animated-user";
import { items } from "../../assets/items";
import "../../App.css"

function Main() {

  // const [profilePadding, setProfilePadding] = useState(false)
  
  return (
      <div className={"flex justify-between w-full p-7 overflow-auto flex-grow"}>
          <h1 className="text-2xl font-medium  rounded-xl h-min p-1 hover:bg-slate-300 cursor-pointer">Nexarion</h1>
        <div className="hover:pr-10">
          <AnimatedTooltip items={items} />
        </div>
      </div>
  );
}

export default Main;
