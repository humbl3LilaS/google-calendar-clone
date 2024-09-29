import { useDateInfoStore } from "@/store/dateInfoStore";
import { Input } from "./ui/input";
import { Clock, AlignRight, Bookmark } from "lucide-react";
import { Label } from "./ui/label";

]import BookmarkSelectorContainer from "./BookmarkSelectorContainer";

const AddEventForm = () => {
	const selectedDate = useDateInfoStore((state) => state.selectedDate);
	return (
		<div>
			<Input placeholder="Add the title" />
			<p className="mt-4 flex items-center gap-x-4">
				<Clock />
				<span>{selectedDate.format("dddd, MMMM DD")}</span>
			</p>
			<p className="mt-4 flex items-center gap-x-4">
				<Label htmlFor="description">
					<AlignRight />
				</Label>
				<Input
					placeholder="Add the description"
					id="description"
				/>
			</p>
			<p className="mt-4 flex items-center gap-x-4">
				<Bookmark />
				<BookmarkSelectorContainer />
			</p>
		</div>
	);
};

export default AddEventForm;
