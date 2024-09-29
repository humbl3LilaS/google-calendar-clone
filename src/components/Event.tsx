import { CalendarEvent } from "@/store/eventStore";
import UpdateEventPopup from "./UpdateEventPopup";

const Event = ({ data }: { data: CalendarEvent }) => {
	return <UpdateEventPopup data={data} />;
};

export default Event;
