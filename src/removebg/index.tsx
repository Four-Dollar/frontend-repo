import axios, { AxiosError } from 'axios';

export const Removebg = (source: string) => {
	const formData = new FormData();
	//imageurl
	formData.append('size', 'auto');
	formData.append('image_url', source || '');
	//ts problem type define

	axios
		.post('https://api.remove.bg/v1.0/removebg', formData, {
			headers: {
				'X-Api-Key': 'B1uqVXYcbaMdK7diwjVwUGxq',
			},
		})
		.then((res: any) => {})
		.catch((error: Error | AxiosError) => {
			return console.log(error);
		});
};
