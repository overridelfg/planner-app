import Link from "next/link";
import NavLink from "./NavLink/NavLink";

interface SidebarMenuProps {
    
}
 
const SidebarMenu: React.FC<SidebarMenuProps> = async () => {
    return (<div className="flex flex-col w-[300px] p-10 bg-sidebar min-h-full">
        <NavLink href="/home" content="Taks"/>
        <NavLink href="/dashboard" content = "Habits"/>
        <NavLink href="/timer" content="Timer"/>
    </div>);
}
 
export default SidebarMenu;