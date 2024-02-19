import { PropsWithChildren } from "react";

interface DashboardLayoutProps extends PropsWithChildren {
    
}
 
const DashboardLayout: React.FC<DashboardLayoutProps> = ({children}) => {
    return (<div>
        {children}
    </div>);
}
 
export default DashboardLayout;