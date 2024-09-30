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
	addActiveTags: (payload: string | undefined) => void;
	removeActiveTags: (payload: string | undefined) => void;
};

type Store = State & Action;

export const useActiveTagStore = create<Store>()(
	immer((set) => ({
		activeTags: [],
		addActiveTags: (payload) =>
			set((state) => {
				const tagsName = state.activeTags.map((item) => item.tagName);
				if (!tagsName.includes(payload)) {
					state.activeTags.push({ tagName: payload, isActive: true });
				} else {
					state.activeTags.map((item) => {
						if (item.tagName === payload) {
							item.isActive = true;
						}
						return item;
					});
				}
			}),
		removeActiveTags: (payload) =>
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
