import clsx from "clsx";
import { Dayjs } from "dayjs";
import { isToday } from "../util/date-helper";

const Day = ({ day, rowIdx }: { day: Dayjs; rowIdx: number }) => {
	return (
		<div className="border border-gray-200 flex flex-col">
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
	);
};

export default Day;
