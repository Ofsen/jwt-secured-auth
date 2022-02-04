import axios from 'axios';

import { NextApiResponse, NextApiRequest } from 'next';

const refreshToken = async (req: NextApiRequest, res: NextApiResponse) => {
	const { headers } = req;

	try {
		const { data, headers: returnedHeaders } = await axios.post('http://127.0.0.1:8000/refresh_token', undefined, {
			headers,
		});

		Object.keys(returnedHeaders).forEach((key) => res.setHeader(key, returnedHeaders[key]));

		res.status(200).json(data);
	} catch (err) {
		res.send(err);
	}
};

export default refreshToken;
