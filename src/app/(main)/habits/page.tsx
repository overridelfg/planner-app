import HabitsList from "@/components/HabitsList/HabitsList";
import { Metadata } from "next";

interface DashboardProps {}


export const metadata: Metadata = {
  title: "Habits",
  description: `Habits"`,
};

const Dashboard: React.FC<DashboardProps> = () => {
  return <HabitsList/>;
};

export default Dashboard;
