import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useDateInfoStore } from "@/store/dateInfoStore";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SmallCalendar = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const setCurrentMonth = useDateInfoStore((state) => state.setCurrentMonth);
	const monthIndex = useDateInfoStore((state) => state.monthIndex);

	const handler = (payload: Date | undefined) => {
		setDate(payload);
		if (payload) {
			setCurrentMonth(payload.getMonth());
		}
	};

	return (
		<div>
			<Calendar
				mode="single"
				selected={date}
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
