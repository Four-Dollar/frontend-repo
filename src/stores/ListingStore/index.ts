import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ListingState {
	title: string;
	description: string;
	price: string;
	deadline: number;
	setTitle: (title: string) => void;
	setDescription: (description: string) => void;
	setPrice: (price: string) => void;
	setDeadline: (deadline: number) => void;
	// register: (title: string, description: string, price: number) => void;
}

export const useListingStore = create<ListingState>()(
	devtools(
		persist(
			(set) => ({
				title: '',
				description: '',
				price: '',
				deadline: 0,
				setTitle: (title: string) => set(() => ({ title: title })),
				setDescription: (description: string) =>
					set(() => ({ description: description })),
				setPrice: (price: string) => set(() => ({ price: price })),
				setDeadline: (deadline: number) => set(() => ({ deadline: deadline })),
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
