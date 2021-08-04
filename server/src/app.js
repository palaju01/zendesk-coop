import express from 'express';
import cors from 'cors';
import service from './service';

const app = express();

app.use(cors());

app.get('/tickets', async (request, response) => {
	const {size, before, after} = request.query;
	// console.log(`Request received from: ${request.protocol}://${request.get('host')}${request.originalUrl}`);
	try {
		const result = await service(size, before, after);
		response.status(200).json(result);
	} catch (error) {
		console.log(error);
		response.status(500).send('Sorry, there was an issue retrieving the tickets!');
	}
});

export default app;
