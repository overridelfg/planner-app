'use client'
import LoginForm from '@/components/Auth/LoginForm/LoginForm';
import DashboardLayout from '@/components/Dashboard/dashboard-layout';
import { getAccessToken, getUserFromStorage } from '@/services/auth.helper'
import Button from '@/ui/Button'
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Main() {

	const getUser = async () => {
		await getUserFromStorage().then((user) => {
			if(user == null) {
				return <LoginForm/>
			}else {
				return <DashboardLayout/>
			}
		});
	};

	const user = getUser();
	if(user === null) {
		redirect('/login')
	}else {
		redirect('/home')
	}


	return (
		<div>
			
		</div>
	)
}
