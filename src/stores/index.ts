import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ListingState {
	title: string;
	description: string;
	price: string;
	setTitle: (title: string) => void;
	setDescription: (description: string) => void;
	setPrice: (price: string) => void;
	// register: (title: string, description: string, price: number) => void;
}

export const useListingStore = create<ListingState>()(
	devtools(
		persist(
			(set) => ({
				title: '',
				description: '',
				price: '',
				setTitle: (title: string) => set(() => ({ title: title })),
				setDescription: (description: string) =>
					set(() => ({ description: description })),
				setPrice: (price: string) => set(() => ({ price: price })),
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
