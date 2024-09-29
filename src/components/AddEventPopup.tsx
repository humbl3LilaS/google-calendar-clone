import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
	DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import plus from "/icon/plus.svg";

import AddEventForm from "./AddEventForm";

const AddEventPopup = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant={"outline"}
					className="px-6 py-6 rounded-2xl">
					<img
						src={plus}
						alt="icon for plus sign"
						className="mr-3"
					/>
					<span className="font-bold">Create</span>
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add New Event</DialogTitle>
				</DialogHeader>
				<AddEventForm />
			</DialogContent>
		</Dialog>
	);
};

export default AddEventPopup;
