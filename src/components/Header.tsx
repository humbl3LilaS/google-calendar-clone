import { useDateInfoStore } from "@/store/dateInfoStore";
import { Button } from "./ui/button";
import calendar from "/icon/calendar.svg";
import arrowLeft from "/icon/chevron-left.svg";
import arrowRight from "/icon/chevron-right.svg";
import dayjs from "dayjs";
import { getMonthYear } from "@/util/date-helper";
const Header = () => {
	const setCurrentMonth = useDateInfoStore((state) => state.setCurrentMonth);
	const monthIndex = useDateInfoStore((state) => state.monthIndex);
	return (
		<header className="p-4 flex items-center ">
			<img
				src={calendar}
				alt="calendar icon"
				className="aspect-square w-12 mr-4"
			/>
			<h1 className="mr-8 text-xl text-gray-500 font-bold">
				Eldweiss Calendar
			</h1>
			<Button
				className="mr-6"
				onClick={() => setCurrentMonth(dayjs().month())}>
				Today
			</Button>
			<Button
				variant={"outline"}
				className="mr-2"
				onClick={() => setCurrentMonth(monthIndex - 1)}>
				<img
					src={arrowLeft}
					alt="icon of cheveron left"
				/>
			</Button>
			<Button
				variant={"outline"}
				onClick={() => setCurrentMonth(monthIndex + 1)}
				className="mr-8">
				<img
					src={arrowRight}
					alt="icon of cheveron right"
				/>
			</Button>
			<h2 className="font-bold text-xl text-gray-500">
				{getMonthYear(monthIndex)}
			</h2>
		</header>
	);
};

export default Header;
