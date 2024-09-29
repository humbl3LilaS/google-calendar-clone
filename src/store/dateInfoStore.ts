import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { getDaysInMonth } from "../util/date-helper";
import dayjs, { Dayjs } from "dayjs";

type State = {
	currentMonth: Dayjs[][];
	monthIndex: number;
	selectedDate: Dayjs;
	selectedBookmark: string | undefined;
};

type Action = {
	setCurrentMonth: (payload: number) => void;
	setSelectedDate: (payload: Dayjs) => void;
	setSelectedBookmark: (payload: string) => void;
};

type DateInfoStore = State & Action;

export const useDateInfoStore = create<DateInfoStore>()(
	immer((set) => ({
		currentMonth: getDaysInMonth(),
		monthIndex: dayjs().month(),
		selectedDate: dayjs(),
		selectedBookmark: undefined,
		setCurrentMonth: (payload) =>
			set((state) => {
				state.currentMonth = getDaysInMonth(payload);
				state.monthIndex = payload;
			}),
		setSelectedDate: (payload) =>
			set((state) => {
				state.selectedDate = payload;
			}),
		setSelectedBookmark: (payload) =>
			set((state) => {
				state.selectedBookmark = payload;
			}),
	})),
);
