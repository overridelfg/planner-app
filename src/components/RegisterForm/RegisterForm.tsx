'use client'

import { PropsWithChildren, useState } from "react";
import RegisterStepOne from "./RegisterStepOne/RegisterStepOne";
import RegisterStepTwo from "./RegisterStepTwo/RegisterStepTwo";

interface RegisterFormProps extends PropsWithChildren{
    
}

interface IRegisterFormValues {
    email: string;
    username: string;
    password: string;
}

type RegisterStepsType = 1 | 2;
 
const RegisterForm: React.FC<RegisterFormProps> = () => {

    const [currentStep, setCurrentStep] = useState<RegisterStepsType>(1);
	const [registerDto, setRegisterDto] = useState<IRegisterFormValues>({
		email: '',
		username: '',
		password: ''
	})

    const handleNextStep = (data: {[key in keyof IRegisterFormValues]?: string}) => {
        
        setRegisterDto(prevState => ({...prevState, ...data}));
        if(currentStep === 1) {
            setCurrentStep(2);
        }else {
            
        }
    }


    return (
        <div className='bg-sidebar flex flex-col justify-center items-center w-[500px] p-10 rounded-xl gap-10'>
			<h1 className='text-2xl'>Sign up</h1>
            {currentStep === 1 
            ? <RegisterStepOne handleNextStep = {handleNextStep}/>
            : <RegisterStepTwo handleNextStep = {handleNextStep}/>}
		</div>
     );
}
 
export default RegisterForm;