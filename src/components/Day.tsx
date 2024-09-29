import clsx from "clsx";
import { Dayjs } from "dayjs";
import { isToday } from "../util/date-helper";
import AddEventPopup from "./AddEventPopup";
import { useDateInfoStore } from "@/store/dateInfoStore";

const Day = ({ day, rowIdx }: { day: Dayjs; rowIdx: number }) => {
	const setSelectedDate = useDateInfoStore((state) => state.setSelectedDate);

	return (
		<AddEventPopup>
			<div
				className="border border-gray-200 flex flex-col"
				onClick={() => setSelectedDate(day)}>
				<header className="flex flex-col items-center">
					{rowIdx === 0 && (
						<p className="mt-1 text-sm font-openSans">
							{day.format("ddd").toUpperCase()}
						</p>
					)}
					<p
						className={clsx(
							"p-1 my-1 text-sm text-center",
							isToday(day) && "w-7 bg-blue-600 text-white rounded-full",
						)}>
						{day.format("DD")}
					</p>
				</header>
			</div>
		</AddEventPopup>
	);
};

export default Day;
