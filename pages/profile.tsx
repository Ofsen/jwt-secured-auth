import type { NextPage } from 'next';
import { getAccessToken } from '../functions/accessToken';
import withAuth from '../functions/withAuth';
import styles from '../styles/Home.module.css';

const Profile: NextPage = () => {
	const accessToken = getAccessToken();
	return (
		<div className={styles.container}>
			<h1>Profile de l&apos;utilisateur</h1>
			<h4>Access Token:</h4>
			<p>
				<code>{JSON.stringify(accessToken)}</code>
			</p>
		</div>
	);
};

export default withAuth(Profile);
