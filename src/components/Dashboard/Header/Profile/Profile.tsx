"use client"

import { useAuthSelector } from "@/hooks/useAuth";
import { getUserFromStorage } from "@/services/auth.helper";
import { getStoreLocal } from "@/utils/local-storage";
import { useEffect, useState } from "react";

interface ProfileProps {
    
}
 
const Profile: React.FC<ProfileProps> = () => {

    const {user} = useAuthSelector()
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
        setIsClient(true);
    }, [])


    return (<div>
        {isClient && user ? user.email: null}
    </div>);
}
 
export default Profile;