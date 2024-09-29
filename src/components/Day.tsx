import clsx from "clsx";
import { Dayjs } from "dayjs";
import { isToday } from "../util/date-helper";
import AddEventPopup from "./AddEventPopup";
import { useDateInfoStore } from "@/store/dateInfoStore";
import { useEventStore } from "@/store/eventStore";
import Event from "./Event";

const Day = ({ day, rowIdx }: { day: Dayjs; rowIdx: number }) => {
	const setSelectedDate = useDateInfoStore((state) => state.setSelectedDate);
	const events = useEventStore((state) => state.events);
	const filteredEvents = events.filter((item) => item.date.isSame(day));

	return (
		<div className="relative">
			<AddEventPopup>
				<div
					className="absolute w-full h-full top-0 left-0 cursor-pointer z-10"
					onClick={() => setSelectedDate(day)}
				/>
			</AddEventPopup>
			<div>
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
				<div>
					{filteredEvents.map((item) => (
						<Event
							data={item}
							key={item.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Day;
