import { useState } from "react";
import BookmarkItem from "./Bookmark";
import { RadioGroup } from "./ui/radio-group";
import {
	useActiveBookmark,
	useSetActiveBookmark,
} from "@/context/BookmarkSelectorContextProvider";

const BOOKMARK_THEMESS = ["indigo", "gray", "green", "blue", "red", "purple"];
const BookmarkSelector = () => {
	const setActiveTag = useSetActiveBookmark();
	const activeTag = useActiveBookmark();
	console.log(activeTag);
	return (
		<RadioGroup onValueChange={(value) => setActiveTag(value)}>
			<div className="flex items-center gap-x-4">
				{BOOKMARK_THEMESS.map((item) => (
					<BookmarkItem
						theme={`bg-${item}-500`}
						value={item}
						key={item}
					/>
				))}
			</div>
		</RadioGroup>
	);
};

export default BookmarkSelector;
