"use client"
import Button from "@/ui/Button";
import { InputField } from "@/ui/InputField";
import { useCreateHabit } from "../hooks/useCreateHabit";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IHabitsResponse, TypeHabitFormState } from "@/types/habits.type";
import SingleSelect from "@/components/SingleSelect/SingleSelect";
import { COLORS } from "@/constants/colors.constants";

interface HabitsFormProps {
   habitsList: IHabitsResponse[] | undefined;
}
 
const HabitsForm: React.FC<HabitsFormProps> = ({habitsList}) => {

    const {createHabit} = useCreateHabit()
    let biggestOrder = 1;

    if(habitsList && habitsList.length > 0) {
        biggestOrder = habitsList[habitsList.length - 1].order + 1;
    }

    const { register, handleSubmit, control, reset } = useForm<TypeHabitFormState>({
        defaultValues: {
            name: '',
            color: COLORS[COLORS.length - 1].value,
            order: biggestOrder,
          },
    })

    
    const onSubmit: SubmitHandler<TypeHabitFormState> = (values) => {
        const data: TypeHabitFormState = {
            name: values.name,
            duration: +values.duration!,
            order: biggestOrder,
            color: values.color
        }
        createHabit({data})

        reset({
            name: '',
            color: COLORS[COLORS.length - 1].value,
            order: biggestOrder,
            duration: 0
        })
        
    }


    return (<form className="flex flex-col gap-3 self-start flex-shrink-0 w-[300px]"
    onSubmit={handleSubmit(onSubmit)}>
        <InputField
        className="border bg-bg h-[60px]" id="name"
        placeholder="Name"
        {...register("name", {required: true})}/>
        <InputField 
        className="border bg-bg h-[60px]" id="duration"
        placeholder="Min"
        type="number"
        {...register("duration", {required: true})}/>
        <Controller
        control={control}
        name="color"
        render={({field: {value, onChange}}) => (
            <SingleSelect
            data={COLORS}
            value={value}
            onChange={onChange}
            isColorSelect
            />
        )}
        />
        <Button
        className="h-[50px]"
        type="submit">
            Create Habit
        </Button>
    </form>);
}
 
export default HabitsForm;