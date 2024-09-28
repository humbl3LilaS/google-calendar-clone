import { Dayjs } from "dayjs";

const Day = ({ day, rowIdx }: { day: Dayjs; rowIdx: number }) => {
	return (
		<div className="border border-gray-200 flex flex-col">
			<header className="flex flex-col items-center">
				{rowIdx === 0 && (
					<p className="mt-1 text-sm font-openSans">
						{day.format("ddd").toUpperCase()}
					</p>
				)}
				<p className="p-1 my-1 text-sm text-center ">{day.format("DD")}</p>
			</header>
		</div>
	);
};

export default Day;
