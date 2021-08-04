import app from '../src/app';
import supertest from 'supertest';
import service from '../src/service';

const request = supertest(app);
jest.mock('../src/service', () => {
	return jest.fn().mockImplementation(() => {
		throw new Error("Server error");
	});
});

describe('Test /ticket', () => {
	beforeEach(() => {
		// Clear all instances and calls to constructor and all methods:
		service.mockClear();
	});
	test('It should response the GET method', async () => {
		const response = await request.get('/tickets');
		expect(response.statusCode).toBe(500);
	});
});
