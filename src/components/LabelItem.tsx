import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useActiveTagStore } from "@/store/activeTagStore";

const LabelItem = ({ tagName }: { tagName: string | undefined }) => {
	const addActiveTags = useActiveTagStore((state) => state.activateActiveTag);
	const removeActiveTags = useActiveTagStore(
		(state) => state.deactivateActiveTag,
	);

	const [checked, setChecked] = useState(true);

	const handler = () => {
		setChecked((prev) => !prev);
		if (!checked) {
			addActiveTags(tagName);
		} else {
			removeActiveTags(tagName);
		}
	};

	return (
		<div className="flex items-center gap-x-3">
			<Checkbox
				id={`label-${tagName}`}
				checked={checked}
				onClick={handler}
			/>
			<Label
				className="capitalize"
				htmlFor={`label-${tagName}`}>
				{tagName}
			</Label>
		</div>
	);
};

export default LabelItem;
