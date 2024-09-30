import LabelItem from "./LabelItem";
import { useActiveTagStore } from "@/store/activeTagStore";
import { Button } from "./ui/button";
import { useEventStore } from "@/store/eventStore";
import { useEffect } from "react";

const LabelsList = () => {
	const events = useEventStore((state) => state.events);
	const activeTags = useActiveTagStore((state) => state.activeTags);

	const addActiveTag = useActiveTagStore((state) => state.addActiveTag);
	const removeActiveTag = useActiveTagStore((state) => state.removeActiveTag);
	useEffect(() => {
		const tags = [...new Set(events.map((item) => item.bookmarkTag))];
		if (activeTags.length === tags.length) {
			const allContentSame = activeTags
				.map((item) => item.tagName)
				.every((value, idx) => value === tags[idx]);
			if (allContentSame) {
				return;
			} else {
				const includeInTagsButNotInActiveTags = tags.filter(
					(item) => !activeTags.map((item) => item.tagName).includes(item),
				);
				const includeInActiveTagsNotInTags = activeTags
					.map((item) => item.tagName)
					.filter((item) => !tags.includes(item));
				console.log(
					"includeInActiveTagsNotInTags",
					includeInActiveTagsNotInTags,
				);
				console.log(
					"includeInTagsButNotInActiveTags",
					includeInTagsButNotInActiveTags,
				);
				if (includeInTagsButNotInActiveTags.length > 1) {
					includeInTagsButNotInActiveTags.forEach((item) => addActiveTag(item));
				} else {
					console.log("I'm here");
					addActiveTag(includeInTagsButNotInActiveTags[0]);
				}
				if (includeInActiveTagsNotInTags.length > 1) {
					includeInActiveTagsNotInTags.forEach((item) => removeActiveTag(item));
				} else {
					console.log("I'm here too");
					removeActiveTag(includeInActiveTagsNotInTags[0]);
				}
			}
		}

		if (activeTags.length === 0 || tags.length > 0) {
			tags.forEach((tag) => addActiveTag(tag));
		}
	}, [events, addActiveTag]);

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
