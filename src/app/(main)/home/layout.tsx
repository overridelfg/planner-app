import DashboardLayout from "@/components/Dashboard/dashboard-layout";
import { PropsWithChildren } from "react";

const Layout: React.FC = ({ children }: PropsWithChildren<unknown>) => {
  return <div>{children}</div>;
};

export default Layout;
