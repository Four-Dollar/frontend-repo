import { rest } from 'msw';
import { apiUrl } from 'common/apiUrl';

export const listingHandlers = [
	rest.post(`${apiUrl}/used-goods`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(req.body));
	}),
];
