import { IAuthResponse } from '@/types/auth.types';
import Cookie from 'js-cookie'

export const saveTokensStorage = (accessToken: string) => {
    Cookie.set('accessToken', accessToken);
    // Cookie.set('refreshToken', data.refreshToken);
}

export const getAccessToken = () => {
    const accessToken = Cookie.get('accessToken');
    return accessToken || null;
};

export const getUserFromStorage = async () => {
    return JSON.parse(localStorage.getItem('user') || '{}');
}

export const saveToStorage = (data: IAuthResponse) => {
    saveTokensStorage(data.tokens.accessToken);
    localStorage.setItem('user', JSON.stringify(data.user));
};

export const removeFromStorage = () => {
    Cookie.remove('accessToken');
    Cookie.remove('refreshToken');
    localStorage.removeItem('user');
};