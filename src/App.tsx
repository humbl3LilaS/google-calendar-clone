import Header from "./components/Header";
import Month from "./components/Month";
import SideBar from "./components/SideBar";

function App() {
	return (
		<>
			<div className={"h-screen flex flex-col"}>
				<Header />
				<div className="flex flex-1 gap-10">
					<SideBar />
					<Month />
				</div>
			</div>
		</>
	);
}

export default App;
