import { Calendar } from "@/components/ui/calendar";
import { useDateInfoStore } from "@/store/dateInfoStore";
import dayjs from "dayjs";

const SmallCalendar = () => {
	const selectedDate = useDateInfoStore((state) => state.selectedDate);
	const setSelectedDate = useDateInfoStore((state) => state.setSelectedDate);

	const handler = (payload: Date | undefined) => {
		if (payload) {
			setSelectedDate(dayjs(payload));
		}
	};

	return (
		<div>
			<Calendar
				mode="single"
				selected={selectedDate.toDate()}
				onSelect={handler}
			/>
		</div>
	);
};

export default SmallCalendar;
