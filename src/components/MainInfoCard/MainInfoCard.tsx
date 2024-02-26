import Image from "next/image";
import { PropsWithChildren } from "react";

interface MainInfoCardProps extends PropsWithChildren {
  src: string;
}

const MainInfoCard: React.FC<MainInfoCardProps> = ({ src, children }) => {
  return (
    <div
      className={
        "flex flex-col w-full bg-sidebar h-[400px] border-2 border-white rounded-md items-center p-4 gap-6"
      }
    >
      <Image src={src} width={100} height={100} alt="tasks-icon" />
      <div>{children}</div>
    </div>
  );
};

export default MainInfoCard;
