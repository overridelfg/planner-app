import axios from "axios";
import { removeFromStorage, saveToStorage } from "./auth.helper";
import { IAuthResponse, ILoginForm, IRegisterForm, IUser } from "@/types/auth.types"
import { axiosClassic } from "@/api/interceptors";

export class AuthService {
    async login(data: ILoginForm ) {
        const response = await axiosClassic.post<IAuthResponse>(
            'auth/login',
            data
        );

        if(response.data.tokens.accessToken) saveToStorage(response.data)

        return response.data.user;
    }

    async signIn(data: IRegisterForm ) {
        const response = await axiosClassic.post<IAuthResponse>(
            'auth/register',
            data
        );

        if(response.data.tokens.accessToken) saveToStorage(response.data)

        return response.data.user;
    }

    async checkEmail(email: string) {
        const response = await axiosClassic.post<{message: string}>(
            'auth/checkEmail',
            {email}
        );

        return response.data.message;
    }

    async logout() {
        removeFromStorage();
    }
}

export default new AuthService();