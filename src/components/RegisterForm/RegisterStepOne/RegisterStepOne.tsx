import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

import Button from '@/ui/Button'

interface IRegisterFormValues {
	email: string
	username: string
	password: string
}

interface RegisterStepOneProps {
	handleNextStep: (data: {
		[key in keyof IRegisterFormValues]?: string
	}) => void
}

interface IRegisterStepOneFormValues {
	email: string
}

const RegisterStepOne: React.FC<RegisterStepOneProps> = ({
	handleNextStep
}) => {
	const [currentStep, setCurrentStep] = useState<1 | 2>(1)
	const [loginCode, setLoginCode] = useState<string>('')
	const [isLoginValid, setIsLoginValid] = useState<boolean>(true)

	const registerFirstStepValidationSchema = Yup.object().shape({
		email: Yup.string()
			.email('Invalid email address')
			.required('This field is required')
	})

	const loginInputChangeHandler = (
		e: React.ChangeEvent<HTMLInputElement>,
		handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	) => {
		handleChange(e)
		if (currentStep === 2) {
			setIsLoginValid(true)
			setLoginCode('')
			setCurrentStep(1)
		}
	}

	return (
		<>
			<Formik
				initialValues={{ email: '' }}
				onSubmit={values => {
					if (currentStep === 1) {
						setCurrentStep(2)
						return
					}

					if (loginCode === '111111') {
						setIsLoginValid(true)
						handleNextStep({ email: values.email })
					} else {
						setIsLoginValid(false)
					}
				}}
				validateOnChange={false}
				validationSchema={registerFirstStepValidationSchema}
			>
				{({ handleChange, errors }) => (
					<Form className='flex flex-col w-full gap-5'>
						<div className={`flex-col gap-1 flex`}>
							<label
								className='text-xs'
								htmlFor='email'
							>
								Email
							</label>
							<Field
								className='p-2 text-bg rounded-sm'
								id='email'
								name='email'
								type='email'
								placeholder='Enter your email address...'
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									loginInputChangeHandler(e, handleChange)
								}}
							/>
							{errors.email ? (
								<label className='text-xs text-error'>{errors.email}</label>
							) : null}
						</div>
						<div
							className={`flex-col gap-1 ${currentStep === 2 ? 'flex' : 'hidden'}`}
						>
							<label
								className='text-xs'
								htmlFor='loginCode'
							>
								Login code
							</label>
							<input
								className='p-2 text-bg rounded-sm'
								id='loginCode'
								name='loginCode'
								type='text'
								value={loginCode}
								placeholder='Past login code'
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setLoginCode(e.target.value)
								}}
							/>

							{!isLoginValid ? (
								<label className='text-xs text-error'>
									Your login code was incorrect. Please try again.
								</label>
							) : null}
						</div>
						<Button type='submit'>
							{currentStep === 1
								? 'Continue with email'
								: 'Continue with login code'}
						</Button>
					</Form>
				)}
			</Formik>
            <div className='w-full pt-10 border-t border-white'>
            <Button className="border border-white bg-bg flex justify-center gap-2 hover:shadow transition duration-150">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                <span>Continue with Google</span>
             </Button>
            </div>

            <p className='text-xs text-grey text-center'>By clicking “Continue with Google/Email” above, you acknowledge that you have read and understood, and agree to Terma & Contidtions</p>
		</>
	)
}

export default RegisterStepOne
