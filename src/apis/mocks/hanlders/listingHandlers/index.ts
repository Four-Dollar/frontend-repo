import { rest } from 'msw';
export const listingHandlers = [
	rest.post('/login', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(req.body));
	}),
];
