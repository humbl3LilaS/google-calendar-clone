import { CalendarEvent } from "@/store/eventStore";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import UpdateEventForm from "./UpdateEventForm";

type UpdateEventPopupProp = {
	data: CalendarEvent;
};

const UpdateEventPopup = ({ data }: UpdateEventPopupProp) => {
	return (
		<Dialog>
			<DialogTrigger className="w-full px-2">
				<p
					className={` py-1 px-4 relative z-20 bg-emerald-300 rounded-xl text-gray-600 truncate`}>
					{data.title}
				</p>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Update Event</DialogTitle>
				</DialogHeader>
				<UpdateEventForm defaultValue={data} />
			</DialogContent>
		</Dialog>
	);
};

export default UpdateEventPopup;
