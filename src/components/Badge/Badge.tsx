import { PropsWithChildren } from "react";

interface BadgeProps extends PropsWithChildren {
    color: string;
}
 
const Badge: React.FC<BadgeProps> = ({color, children}) => {

    const badgeColor = color === 'low' ? 'bg-green' : color === 'medium' ? 'bg-yellow' : color === 'high' ? 'bg-red' : '';

    return (
        <div className={`${badgeColor} text-white p-3 rounded-md`}>
            {children}
        </div>
    );
}
 
export default Badge;