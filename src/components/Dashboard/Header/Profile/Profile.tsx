"use client";

import { useAuthSelector } from "@/hooks/useAuth";

import ProfileIcon from "@/assets/profile.svg";
import Image from "next/image";
interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const { user } = useAuthSelector();

  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-xl">{user ? user.name : null}</h3>
        <p>{user ? user.email : null}</p>
      </div>
      <Image src={ProfileIcon} alt="profile" width={64} height={64} />
    </div>
  );
};

export default Profile;
