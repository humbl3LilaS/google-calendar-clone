import { CalendarEvent, useEventStore } from "@/store/eventStore";
import { DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { Bookmark, AlignRight, Clock } from "lucide-react";
import BookmarkSelector from "./BookmarkSelector";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useDateInfoStore } from "@/store/dateInfoStore";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

type FormInputs = {
	title: string;
	description?: string;
};

const UpdateEventForm = ({ defaultValue }: { defaultValue: CalendarEvent }) => {
	const selectedDate = useDateInfoStore((state) => state.selectedDate);
	const updateEvent = useEventStore((state) => state.updateEvent);
	const selectedBookmark = useDateInfoStore((state) => state.selectedBookmark);
	const setSelectedBookmark = useDateInfoStore(
		(state) => state.setSelectedBookmark,
	);
	const { register, handleSubmit } = useForm<FormInputs>({
		defaultValues: {
			title: defaultValue.title,
			description: defaultValue.description,
		},
	});
	const onSubmit = handleSubmit((data) => {
		updateEvent(defaultValue.id, {
			title: data.title,
			description: data.description,
			bookmarkTag: selectedBookmark,
		});
	});

	useEffect(() => {
		if (defaultValue.bookmarkTag) {
			setSelectedBookmark(defaultValue.bookmarkTag);
		} else {
			setSelectedBookmark("");
		}
	}, []);

	return (
		<form onSubmit={onSubmit}>
			<Input
				placeholder="Add the title"
				{...register("title", { required: true })}
			/>
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
					{...register("description")}
				/>
			</p>
			<p className="mt-4 flex items-center gap-x-4">
				<Bookmark />
				<BookmarkSelector />
			</p>

			<DialogClose className="w-full">
				<Button
					type="submit"
					className="ml-auto mt-4 block bg-blue-500 text-white">
					Save
				</Button>
			</DialogClose>
		</form>
	);
};

export default UpdateEventForm;
