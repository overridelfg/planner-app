
interface CardStatisticProps {
    label: string;
    value: number;
}
 
const CardStatistic: React.FC<CardStatisticProps> = ({value, label}) => {


    return (<div className="bg-sidebar w-full flex flex-col justify-center items-center h-[150px]">
        <h3 className="text-lg font-bold">{label}</h3>
        <h3 className="text-lg font-bold">{value}</h3>
    </div>);
}
 
export default CardStatistic;