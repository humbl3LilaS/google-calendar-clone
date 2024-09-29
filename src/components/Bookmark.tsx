import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import {
	useActiveBookmark,
	useSetActiveBookmark,
} from "@/context/BookmarkSelectorContextProvider";

const BookmarkItem = ({ theme, value }: { theme: string; value: string }) => {
	const activeTag = useActiveBookmark();
	const setActiveTag = useSetActiveBookmark();
	return (
		<div>
			<RadioGroupItem
				value={value}
				id={value}
				className="hidden"
			/>
			<Label
				className={cn(
					`aspect-square w-8 rounded-full flex justify-center items-center`,
					theme,
				)}
				htmlFor={value}
				onClick={() => setActiveTag(value)}>
				{activeTag === value && <Check className="text-white" />}
			</Label>
		</div>
	);
};

export default BookmarkItem;
