import { BookmarkSelctorContextProvider } from "@/context/BookmarkSelectorContextProvider";
import BookmarkSelector from "./BookmarkSelector";

const BookmarkSelectorContainer = () => {
	return (
		<BookmarkSelctorContextProvider>
			<BookmarkSelector />
		</BookmarkSelctorContextProvider>
	);
};

export default BookmarkSelectorContainer;
