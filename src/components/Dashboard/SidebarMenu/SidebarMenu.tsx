import Link from "next/link";
import NavLink from "./NavLink/NavLink";
import Image from "next/image";
import MainIcon from "@/assets/main-icon.svg";
interface SidebarMenuProps {}

const SidebarMenu: React.FC<SidebarMenuProps> = async () => {
  return (
    <div className="flex flex-col w-[300px] py-4 bg-sidebar min-h-full">
      <div className="flex items-center gap-3 pb-5 border-b border-x-white mb-3 px-3">
        <Image
          src={MainIcon}
          width={50}
          height={50}
          alt="main-icon"
          className={"font-medium"}
        />
        <h3>HETPlanner</h3>
      </div>
      <div className="flex flex-col w-full gap-1 p-3">
        <NavLink href="/home" content="Home" />
        <NavLink href="/tasks" content="Tasks" />
        <NavLink href="/habits" content="Habits" />
        <NavLink href="/timer" content="Timer" />
      </div>
    </div>
  );
};

export default SidebarMenu;
