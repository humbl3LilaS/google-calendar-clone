import { Calendar } from "@/components/ui/calendar";
import { useDateInfoStore } from "@/store/dateInfoStore";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";

const SmallCalendar = () => {
	const selectedDate = useDateInfoStore((state) => state.selectedDate);
	const setSelectedDate = useDateInfoStore((state) => state.setSelectedDate);
	const setCurrentMonth = useDateInfoStore((state) => state.setCurrentMonth);
	const monthIndex = useDateInfoStore((state) => state.monthIndex);

	const handler = (payload: Date | undefined) => {
		setSelectedDate(dayjs(payload));
		if (payload) {
			setCurrentMonth(payload.getMonth());
		}
	};

	return (
		<div>
			<Calendar
				mode="single"
				selected={selectedDate.toDate()}
				onSelect={handler}
				components={{
					IconLeft: ({ ...props }) => (
						<ChevronLeft
							className="h-8 w-8"
							onClick={() => setCurrentMonth(monthIndex - 1)}
						/>
					),
					IconRight: ({ ...props }) => (
						<ChevronRight
							className="h-8 w-8"
							onClick={() => setCurrentMonth(monthIndex + 1)}
						/>
					),
				}}
			/>
		</div>
	);
};

export default SmallCalendar;
