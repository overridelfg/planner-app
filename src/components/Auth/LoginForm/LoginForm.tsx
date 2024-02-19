'use client'
import AuthService from '@/services/auth.service';
import Button from '@/ui/Button';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

interface LoginFormProps {
    
}
 
const LoginForm: React.FC<LoginFormProps> = () => {

    const login = async(email: string, password: string) => {
        await AuthService.login({email, password})
    }

    const registerSecondStepValidationSchema = Yup.object().shape({
        email: Yup.string()
                .email('Invalid email address')
                .required('This field is required.'),
        password: Yup.string()
                .min(4, 'Min 4 letters')
                .required('This field is required.')
    });

    return ( 
        <div className='bg-sidebar flex flex-col justify-center items-center w-[500px] p-10 rounded-xl gap-7'>
            <h1 className='text-2xl'>Log in</h1>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values) =>  {
                login(values.email, values.password);
              }}
              validationSchema = {registerSecondStepValidationSchema}>
                {({errors}) => (
                <Form className='flex flex-col w-full gap-5'>
                    <div className={`flex-col gap-1 flex`}>
                        <label
                        className='text-xs'
                        htmlFor='email'>
                            Email
                        </label>
                        <Field
                            className='p-2 text-bg rounded-sm'
                            id='email'
                            name='email'
                            type='email'
                            placeholder='Enter your email address...'
                        />
                        {errors.email ? <label className='text-xs'>{errors.email}</label> : null}
                    </div>
                    <div className={`flex-col gap-1 flex`}>
                        <label
                        className='text-xs'
                        htmlFor='password'>
                            Password
                        </label>
                        <Field
                            className='p-2 text-bg rounded-sm'
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Enter your password...'
                        />
                        {errors.password ? <label className='text-xs'>{errors.password}</label> : null}
                    </div>
                    <Button
                    type='submit'>
                        Log in
                    </Button>
                </Form>
                )}
            </Formik>
        </div>
    );
}
 
export default LoginForm;