import HeaderMenu from "@/components/Dashboard/Header/HeaderMenu";
import SidebarMenu from "@/components/Dashboard/SidebarMenu/SidebarMenu";
import DashboardLayout from "@/components/Dashboard/dashboard-layout";
import { PropsWithChildren } from "react";

import dayjs, { type Dayjs } from "dayjs";

import isoWeek from "dayjs/plugin/isoWeek";

import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";

dayjs.extend(weekYear);
dayjs.extend(weekOfYear);

dayjs.extend(isoWeek);

const Layout: React.FC = ({ children }: PropsWithChildren<unknown>) => {
  console.log(dayjs().startOf("isoWeek"));

  return (
    <main className="flex max-w-full min-h-svh">
      <SidebarMenu />
      <div className="flex flex-col w-full px-10 py-4 gap-5">
        <HeaderMenu />
        <div className="flex flex-col">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
