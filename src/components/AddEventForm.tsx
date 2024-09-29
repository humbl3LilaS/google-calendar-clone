import { useDateInfoStore } from "@/store/dateInfoStore";
import { Input } from "./ui/input";
import { Clock } from "lucide-react";

const AddEventForm = () => {
	const selectedDate = useDateInfoStore((state) => state.selectedDate);
	return (
		<div>
			<Input placeholder="Add the title" />
			<p className="mt-4 flex items-center gap-x-4">
				<Clock />
				<span>{selectedDate.format("dddd, MMMM DD")}</span>
			</p>
		</div>
	);
};

export default AddEventForm;
