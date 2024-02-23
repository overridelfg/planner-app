import Button from "@/ui/Button";
import cn from 'clsx';
import Image from "next/image";
import Link from "next/link";
import MainIcon from "@/assets/main-icon.svg"

interface MainHeaderProps {
    className?: string;
}
 
const MainHeader: React.FC<MainHeaderProps> = ({className, ...rest}) => {
    return (
        <header
        className={cn('flex justify-between w-full p-5 h-20 items-center bg-sidebar', className)}
        {...rest}>
            <div className="flex items-center gap-3">
                <Image src={MainIcon} width={50} height={50} alt="main-icon" className={"font-medium"}/>
                <h3>HETPlanner</h3>
            </div>
            <div className="flex gap-4">
                <Link href={'/login'} className="h-10 w-[100px] rounded-sm bg-primary p-2 hover:bg-primaryHover transition ease-in flex justify-center items-center">Login</Link>
                <Link href={'/register'} className="h-10 w-[150px] bg-sidebar border-2 border-grey rounded-sm p-2 hover:bg-primaryHover transition ease-in flex justify-center items-center ">Sign up</Link>
            </div>
        </header>
    );
}
 
export default MainHeader;