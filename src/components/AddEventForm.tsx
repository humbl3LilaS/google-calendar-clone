import { useDateInfoStore } from "@/store/dateInfoStore";
import { Input } from "./ui/input";
import { Clock, AlignRight, Bookmark } from "lucide-react";
import { Label } from "./ui/label";

import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { useEventStore } from "@/store/eventStore";
import BookmarkSelector from "./BookmarkSelector";

type FormInputs = {
	title: string;
	description?: string;
};

const AddEventForm = () => {
	const selectedDate = useDateInfoStore((state) => state.selectedDate);
	const addEvent = useEventStore((state) => state.addEvent);
	const selectedBookmark = useDateInfoStore((state) => state.selectedBookmark);
	const { register, handleSubmit } = useForm<FormInputs>();
	const onSubmit = handleSubmit((data) => {
		addEvent({
			id: Math.random().toString(),
			title: data.title,
			description: data.description,
			date: selectedDate,
			bookmarkTag: selectedBookmark,
		});
	});

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

			<Button
				type="submit"
				className="ml-auto mt-4 block bg-blue-500 text-white">
				Save
			</Button>
		</form>
	);
};

export default AddEventForm;
