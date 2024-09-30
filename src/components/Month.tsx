import React from "react";
import { useDateInfoStore } from "../store/dateInfoStore";
import Day from "./Day";

const Month = () => {
	const currentMonth = useDateInfoStore((state) => state.currentMonth);
	return (
		<div className="bg-blue-200 flex-1 grid grid-cols-7 gird-rows-5">
			{currentMonth.map((row, i) => {
				return (
					<React.Fragment key={i}>
						{row.map((day, idx) => {
							return (
								<Day
									day={day}
									key={idx}
									rowIdx={i}
								/>
							);
						})}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default Month;
