import AddEventPopup from "./AddEventPopup";
import LabelsList from "./LabelsList";
import SmallCalendar from "./SmallCalendar";
import { Button } from "./ui/button";
import plus from "/icon/plus.svg";

const SideBar = () => {
	return (
		<div className="bg-emerald-200 w-80 p-5 border border-gray-500">
			<AddEventPopup>
				<Button
					variant={"outline"}
					className="px-6 py-6 rounded-2xl">
					<img
						src={plus}
						alt="icon for plus sign"
						className="mr-3"
					/>
					<span className="font-bold">Create</span>
				</Button>
			</AddEventPopup>
			<SmallCalendar />
			<LabelsList />
		</div>
	);
};

export default SideBar;
