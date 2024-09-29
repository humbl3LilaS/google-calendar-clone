import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
	DialogHeader,
} from "@/components/ui/dialog";
import AddEventForm from "./AddEventForm";
import { ReactNode } from "react";

const AddEventPopup = ({ children }: { children: ReactNode }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
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
