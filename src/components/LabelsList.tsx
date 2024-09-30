import LabelItem from "./LabelItem";
import { useActiveTagStore } from "@/store/activeTagStore";
import { Button } from "./ui/button";
import { useEventStore } from "@/store/eventStore";
import { useEffect } from "react";

const LabelsList = () => {
	const events = useEventStore((state) => state.events);
	const activeTags = useActiveTagStore((state) => state.activeTags);

	const addActiveTags = useActiveTagStore((state) => state.addActiveTags);

	useEffect(() => {
		console.log("use effect ivlike");
		const tags = [...new Set(events.map((item) => item.bookmarkTag))];
		tags.forEach((tag) => addActiveTags(tag));
	}, [events, addActiveTags]);

	return (
		<div className="mt-5">
			<header>
				<h2 className="text-lg font-bold text-stone-700">Labels</h2>
			</header>
			<ul className="flex flex-col gap-y-4">
				{activeTags
					.filter((item) => item.tagName)
					.map(
						(tag) =>
							tag && (
								<LabelItem
									tagName={tag.tagName}
									key={tag.tagName}
								/>
							),
					)}
			</ul>
		</div>
	);
};

export default LabelsList;
