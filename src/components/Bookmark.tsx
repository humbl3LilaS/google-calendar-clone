import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDateInfoStore } from "@/store/dateInfoStore";

const BookmarkItem = ({ theme, value }: { theme: string; value: string }) => {
	const selectedBookmark = useDateInfoStore((state) => state.selectedBookmark);

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
				htmlFor={value}>
				{selectedBookmark === value && <Check className="text-white" />}
			</Label>
		</div>
	);
};

export default BookmarkItem;
