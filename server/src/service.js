import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.ZENDESK_URL,
	auth: {
		username: process.env.USERNAME,
		password: process.env.PASSWORD
	}
});

export default async function (size, before, after) {
	const {data} = await instance.get('/tickets.json',
		{
			params: {
				'page[size]': size,
				'page[before]': before,
				'page[after]': after
			}
		}
	);
	return {
		'tickets': data.tickets,
		'meta': data.meta
	};
};
