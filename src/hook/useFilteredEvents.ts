import { useActiveTagStore } from "@/store/activeTagStore";
import { useEventStore } from "@/store/eventStore";
import { Dayjs } from "dayjs";

export const useFilteredEvents = (day: Dayjs) => {
	const events = useEventStore((state) => state.events).filter((event) =>
		event.date.isSame(day),
	);
	const activeTags = useActiveTagStore((state) => state.activeTags);
	if (!activeTags.length) {
		return events;
	} else {
		return events.filter(
			(item) =>
				!item.bookmarkTag ||
				activeTags
					.filter((item) => item.isActive)
					.map((item) => item.tagName)
					.includes(item.bookmarkTag),
		);
	}
};
