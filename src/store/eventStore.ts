import { Dayjs } from "dayjs";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type CalendarEvent = {
	id: string;
	title: string;
	description?: string;
	bookmarkTag?: string;
	date: Dayjs;
};

type State = {
	events: CalendarEvent[];
};

type Action = {
	addEvent: (payload: CalendarEvent) => void;
	updateEvent: (id: string, payload: Partial<CalendarEvent>) => void;
	deleteEvent: (id: string) => void;
};

type Store = State & Action;

export const useEventStore = create<Store>()(
	immer((set) => ({
		events: [],
		addEvent: (payload) =>
			set((state) => {
				state.events.push(payload);
			}),
		updateEvent: (id, payload) =>
			set((state) => {
				state.events.map((item) => {
					if (item.id == id) {
						item = { ...item, ...payload };
					}
				});
			}),
		deleteEvent: (id) =>
			set((state) => {
				state.events = state.events.filter((item) => item.id !== id);
			}),
	})),
);
