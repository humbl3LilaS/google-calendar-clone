import dayjs, { Dayjs } from "dayjs";

// this function is super heavy we need to memo this
export const getDaysInMonth = (month: number = dayjs().month()) => {
	const year = dayjs().year();
	const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
	let currentDay = 0 - firstDayOfTheMonth;
	const dayMatrix = new Array(5).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			currentDay++;
			return dayjs(new Date(year, month, currentDay));
		});
	});
	return dayMatrix;
};

export const isToday = (day: Dayjs) => {
	return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
};

export const getMonthYear = (month: number) => {
	return dayjs(new Date(dayjs().year(), month)).format("MMMM YYYY");
};
