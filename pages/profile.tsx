import type { NextPage } from 'next';
import { getAccessToken, setAccessToken } from '../libs/accessToken';
import withAuth from '../libs/withAuth';
import styles from '../styles/Home.module.css';

import axios from 'axios';

const Profile: NextPage = () => {
	const accessToken = getAccessToken();

	const ping = () => {
		console.log(accessToken);
		if (accessToken) {
			axios
				.get('http://127.0.0.1:8000/api/users/', {
					headers: { authorization: accessToken ? `bearer ${accessToken}` : '' },
				})
				.then((r) => {
					console.log(r.data);
				})
				.catch((err) => {
					if (err.response.status === 401) {
						axios
							.post('http://127.0.0.1:8000/refresh_token', undefined, { withCredentials: true })
							.then((re) => {
								if (re.data.accessToken) setAccessToken(re.data.accessToken);
							})
							.catch((err) => {
								console.log(err);
							});
					} else {
						alert('somthing happened man idk');
					}
				});
		} else {
		}
	};

	return (
		<div className={styles.container}>
			<h1>Profile de l&apos;utilisateur</h1>
			<h4>Access Token:</h4>
			<p>
				<code>{JSON.stringify(accessToken)}</code>
			</p>
			<button onClick={ping}>Ping SERVER</button>
		</div>
	);
};

export default withAuth(Profile);
