import AddEventPopup from "./AddEventPopup";
import SmallCalendar from "./SmallCalendar";

const SideBar = () => {
	return (
		<div className="bg-emerald-200 w-80 p-5 border border-gray-500">
			<AddEventPopup />
			<SmallCalendar />
		</div>
	);
};

export default SideBar;
