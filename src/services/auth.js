import axios from '../helpers/axios';

export const login = (user) => axios.post(`/auth/login`, user);

export const register = (user) => axios.post(`/auth/register`, user);

export const getUser = (token) => axios.post(`/auth/getuser`, { token });
