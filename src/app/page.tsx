'use client'
import { getAccessToken, getUserFromStorage } from '@/services/auth.helper'
import Button from '@/ui/Button'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Main() {

	const router = useRouter();
	

	const getUser = async () => {
		await getUserFromStorage().then((user) => {
			if(user == null) {
				router.push('/home')
			}else {
				router.push('/login')
			}
		});
	}

	useEffect(() => {
		getUser();
	}, [])


	return (
		<div>
			<Button>Hello</Button>
		</div>
	)
}
