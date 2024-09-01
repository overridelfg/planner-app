import StatisticList from "@/components/StatisticList/StatisticList";
import { SITE_NAME } from "@/constants/seo.constants";
import { Metadata } from "next";

interface HomeProps {}

export const metadata: Metadata = {
  title: "Tasks Statisic",
  description: `Tasks Statisic"`,
};

const Home: React.FC<HomeProps> = () => {

  return <StatisticList/>
};

export default Home;
