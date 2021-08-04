import app from '../src/app';
import supertest from 'supertest';
import service from '../src/service';

const request = supertest(app);
jest.mock('../src/service', () => {
	return jest.fn().mockImplementation(() => {
		return {tickets: new Array(100)};
	});
});


describe('Test /ticket', () => {
	beforeEach(() => {
		// Clear all instances and calls to constructor and all methods:
		service.mockClear();
	});
	test('It should response the GET method', async () => {
		const response = await request.get('/tickets');
		expect(response.statusCode).toBe(200);
	});
	test('It should response with 100 tickets by default', async () => {
		const response = await request.get('/tickets');
		expect(response.body.tickets.length).toBe(100);
	});
});
