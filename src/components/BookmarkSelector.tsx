import BookmarkItem from "./Bookmark";
import { RadioGroup } from "./ui/radio-group";
import { useDateInfoStore } from "@/store/dateInfoStore";
const BOOKMARK_THEME = [
	{ theme: "bg-indigo-500", value: "indigo" },
	{ theme: "bg-gray-500", value: "gray" },
	{ theme: "bg-green-500", value: "green" },
	{ theme: "bg-blue-500", value: "blue" },
	{ theme: "bg-red-500", value: "red" },
	{ theme: "bg-purple-500", value: "purple" },
];
const BookmarkSelector = () => {
	const setSelectedBookmark = useDateInfoStore(
		(state) => state.setSelectedBookmark,
	);
	return (
		<RadioGroup onValueChange={(value) => setSelectedBookmark(value)}>
			<div className="flex items-center gap-x-4">
				{BOOKMARK_THEME.map((item) => (
					<BookmarkItem
						theme={item.theme}
						value={item.value}
						key={item.value}
					/>
				))}
			</div>
		</RadioGroup>
	);
};

export default BookmarkSelector;
