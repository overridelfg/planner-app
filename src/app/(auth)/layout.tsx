import Image from "next/image";
import MainIcon from "@/assets/main-icon.svg"
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"mt-10"}>
      <Link href={"/"}>
        <div className="flex items-center gap-3">
              <Image src={MainIcon} width={50} height={50} alt="main-icon" className={"font-medium"}/>
              <h3>HETPlanner</h3>
        </div>
      </Link>
      <div className="flex justify-center items-center w-full mt-20">
        {children}
      </div>
    </main>
  );
}
