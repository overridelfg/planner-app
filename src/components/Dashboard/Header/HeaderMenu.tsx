import dynamic from "next/dynamic";
import CurrentWindow from "./CurrentWindow/CurrentWindow";
interface HeaderMenuProps {}

const Profile = dynamic(() => import("./Profile/Profile"), {
  ssr: false,
});

const HeaderMenu: React.FC<HeaderMenuProps> = () => {
  return (
    <div className="flex justify-between pb-5 border-b-white border-b w-full flex-grow-0">
      <CurrentWindow />
      <Profile />
    </div>
  );
};

export default HeaderMenu;
