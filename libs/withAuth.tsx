import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getAccessToken } from './accessToken';

export const withAuth = (Component: NextPage) => {
	const Auth = (props: any) => {
		const router = useRouter();

		useEffect(() => {
			const accessToken = getAccessToken();
			if (accessToken.length < 1) {
				return router.push('/');
			}
		});

		return <Component {...props} />;
	};

	return Auth;
};

export default withAuth;
