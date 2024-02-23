import MainHeader from "@/components/MainHeader/MainHeader";
import Image from "next/image";
import TasksIcon from "@/assets/tasks.svg"
import HabitsIcon from "@/assets/habits.svg"
import TimerIcon from "@/assets/timer.svg"
import MainInfoCard from "@/components/MainInfoCard/MainInfoCard";


const Main: React.FC = () => {


	console.log("hi")

	return (
		<>
		<MainHeader className=""/>
		<main className={"flex-grow 2xl-max:p-10 mt-20"}>
			<h1 className={"text-4xl font-bold w-9/12"}>
				Best application for planning your day, improving your habits and become a productive person
			</h1>
			<div className={"flex gap-10 mt-10"}>
				<MainInfoCard src={TasksIcon}>
					<div>
						<h3 className={"text-center font-medium text-lg"}>Create tasks with list</h3>
						<h3 className={"text-center font-medium text-lg"}>Create tasks with map</h3>
					</div>
				</MainInfoCard>
				<MainInfoCard src={HabitsIcon}>
					<div>
						<h3 className={"text-center font-medium text-lg"}>Use our habits with notifications</h3>
					</div>
				</MainInfoCard>
				<MainInfoCard src={TimerIcon}>
					<div>
						<h3 className={"text-center font-medium text-lg"}> Use timer to have a rest while you working</h3>
					</div>
				</MainInfoCard>
			</div>
		</main>
		<footer>© 2024, HETPlanner.com, Inc. or its affiliates</footer>
		</>
	)
}



export default Main;
