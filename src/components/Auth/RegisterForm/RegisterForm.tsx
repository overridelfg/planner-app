'use client'

import { PropsWithChildren, useEffect, useState, useCallback } from "react";
import RegisterStepOne from "./RegisterStepOne/RegisterStepOne";
import RegisterStepTwo from "./RegisterStepTwo/RegisterStepTwo";
import AuthService from "@/services/auth.service";
import { IRegisterForm } from "@/types/auth.types";

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
	const [registerDto, setRegisterDto] = useState<IRegisterForm>({
		email: '',
		username: '',
		password: ''
	})

    const registerRequest = async (userData: IRegisterForm) => {
        await AuthService.signIn(userData)
    }

    const handleNextStep = (data: {[key in keyof IRegisterForm]?: string}) => {

        setRegisterDto(prevState => ({...prevState, ...data}));
        if(currentStep === 1) {
            setCurrentStep(2);
        }else {
            registerRequest({...registerDto, ...data});
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