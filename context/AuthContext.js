import { createContext, useState } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	const login = async () => {
		console.log('login');
	};

	const register = async () => {
		console.log('register');
	};

	const logout = async () => {
		console.log('logout');
	};

	const checkUserLoggedIn = async () => {
		console.log('checkUserLoggedIn');
	};

	return <AuthContext.Provider value={{ user, error, register, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
