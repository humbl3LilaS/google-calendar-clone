import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type ActiveTag = {
	tagName: string | undefined;
	isActive: boolean;
};

type State = {
	activeTags: ActiveTag[];
};

type Action = {
	activateActiveTag: (payload: string | undefined) => void;
	deactivateActiveTag: (payload: string | undefined) => void;
	addActiveTag: (payload: string | undefined) => void;
	removeActiveTag: (payload: string | undefined) => void;
};

type Store = State & Action;

export const useActiveTagStore = create<Store>()(
	immer((set) => ({
		activeTags: [],
		addActiveTag: (payload) =>
			set((state) => {
				const tagsName = state.activeTags.map((item) => item.tagName);
				if (!tagsName.includes(payload)) {
					state.activeTags.push({ tagName: payload, isActive: true });
				}
			}),
		removeActiveTag: (payload) =>
			set((state) => {
				state.activeTags = state.activeTags.filter(
					(item) => item.tagName !== payload,
				);
			}),
		activateActiveTag: (payload) =>
			set((state) => {
				state.activeTags = state.activeTags.map((item) => {
					if (item.tagName === payload) {
						item.isActive = true;
					}
					return item;
				});
			}),
		deactivateActiveTag: (payload) =>
			set((state) => {
				state.activeTags = state.activeTags.map((item) => {
					if (item.tagName === payload) {
						item.isActive = false;
					}
					return item;
				});
			}),
	})),
);
