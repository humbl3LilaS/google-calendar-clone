import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { getMonth } from "../util/date-helper";
import { Dayjs } from "dayjs";

type State = {
	currentMonth: Dayjs[][];
};

type Action = {
	setCurrentMonth: (payload: number) => void;
};

type DateInfoStore = State & Action;

export const useDateInfoStore = create<DateInfoStore>()(
	immer((set) => ({
		currentMonth: getMonth(),
		setCurrentMonth: (payload) =>
			set((state) => {
				state.currentMonth = getMonth(payload);
			}),
	})),
);
