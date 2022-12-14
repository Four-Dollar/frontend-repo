import { rest } from 'msw';
import { apiUrl } from 'common/apiUrl';

export const listingHandlers = [
	rest.post(`${apiUrl}/used-goods`, (req, res, ctx) => {
		if (req.body) {
			return res(ctx.status(201), ctx.json(req.body));
		} else {
			return res(ctx.status(400));
		}
	}),
];
