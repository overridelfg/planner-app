"use client"
import { COLORS } from "@/constants/colors.constants";
import { CSSProperties, PropsWithChildren } from "react";
import { tv } from 'tailwind-variants';

interface BadgeProps extends PropsWithChildren {
    color: string;
    style?: CSSProperties
}
 
const Badge: React.FC<BadgeProps> = ({color, children, style}) => {

    const badge = tv({
        base: 'text-white p-3 rounded-md',
        variants: {
            backgroundColor: {
                low: 'bg-green',
                medium: 'bg-yellow',
                high: 'bg-red',
                ...COLORS
            }
        }
    })

    return (
        <div className={badge({
            backgroundColor: color as 'low' | 'medium' | 'high'
        })}
        style = {style}>
            {children}
        </div>
    );
}
 
export default Badge;