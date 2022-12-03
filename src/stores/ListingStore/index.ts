import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface ListingState {
	userId: number;
	title: string;
	description: string;
	bid: string;
	deadline: number;
	pictures: File[];

	setUserId: (userid: number) => void;
	setTitle: (title: string) => void;
	setDescription: (description: string) => void;
	setBid: (bid: string) => void;
	setDeadline: (deadline: number) => void;
	setPictures: (pictures: File) => void;
}

export const useListingStore = create<ListingState>()(
	devtools(
		persist(
			(set) => ({
				userId: 0,
				title: '',
				description: '',
				bid: '',
				deadline: 0,
				pictures: [],

				setUserId: (userId: number) => set(() => ({ userId: userId })),

				setTitle: (title: string) => set(() => ({ title: title })),

				setDescription: (description: string) =>
					set(() => ({ description: description })),

				setBid: (bid: string) => set(() => ({ bid: bid })),

				setDeadline: (deadline: number) => set(() => ({ deadline: deadline })),

				setPictures: (pictures: File) =>
					set((state) => ({ pictures: [...state.pictures, pictures] })),
			}),
			{
				name: 'listing-storage',
				getStorage: () => sessionStorage,
			},
		),
	),
);
