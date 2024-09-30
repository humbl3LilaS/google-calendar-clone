import { CalendarEvent } from "@/store/eventStore";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import UpdateEventForm from "./UpdateEventForm";
import { cn } from "@/lib/utils";

type UpdateEventPopupProp = {
	data: CalendarEvent;
};

const UpdateEventPopup = ({ data }: UpdateEventPopupProp) => {
	return (
		<Dialog>
			<DialogTrigger className="w-full px-2">
				<p
					className={cn(
						` py-1 px-4 relative z-20 bg-emerald-300 rounded-xl text-gray-100 truncate`,
						data.bookmarkTag ? `bg-${data.bookmarkTag}-500` : "bg-emerald-300",
					)}>
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
