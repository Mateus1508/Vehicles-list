import axios from 'axios';

const api = axios.create({
	baseURL: 'https://wswork.com.br/carsv2.json',
	timeout: 1000,
	source: '/:path*',
	headers: [
		{ 'Content-Type': 'application/json' },
		{ 'Access-Control-Allow-Origin': '*' },
	]
});

export default api;