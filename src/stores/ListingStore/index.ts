import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ListingState {
	userid: number;
	title: string;
	description: string;
	price: string;
	deadline: number;
	pictures: object;
	setUserId: (userid: number) => void;
	setTitle: (title: string) => void;
	setDescription: (description: string) => void;
	setPrice: (price: string) => void;
	setDeadline: (deadline: number) => void;
	setPictures: (pictures: FileList) => void;
	// register: (title: string, description: string, price: number) => void;
}

export const useListingStore = create<ListingState>()(
	devtools(
		persist(
			(set) => ({
				userid: 0,
				title: '',
				description: '',
				price: '',
				deadline: 0,
				pictures: {},
				setUserId: (userid: number) => set(() => ({ userid: userid })),
				setTitle: (title: string) => set(() => ({ title: title })),
				setDescription: (description: string) =>
					set(() => ({ description: description })),
				setPrice: (price: string) => set(() => ({ price: price })),
				setDeadline: (deadline: number) => set(() => ({ deadline: deadline })),
				setPictures: (pictures: FileList) =>
					set(() => ({ pictures: pictures })),
				// register: (title, description, price) =>
				// 	set((state) => {
				// 		state.title = title;
				// 		state.description = description;
				// 		state.price = price;

				// 		return state;
				// 	}),
			}),
			{
				name: 'listing-storage',
			},
		),
	),
);
