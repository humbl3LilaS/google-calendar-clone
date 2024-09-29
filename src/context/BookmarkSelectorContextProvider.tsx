import { createContext, ReactNode, useContext, useState } from "react";

type State = string | undefined;

type Action =
	| React.Dispatch<React.SetStateAction<string | undefined>>
	| undefined;

const BookmarkSelectorStateContext = createContext<State>(undefined);

const BookmarkSelectorActionContext = createContext<Action>(undefined);

export const BookmarkSelctorContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [active, setActive] = useState<string>();
	return (
		<BookmarkSelectorActionContext.Provider value={setActive}>
			<BookmarkSelectorStateContext.Provider value={active}>
				{children}
			</BookmarkSelectorStateContext.Provider>
		</BookmarkSelectorActionContext.Provider>
	);
};

export const useActiveBookmark = () => {
	const active = useContext(BookmarkSelectorStateContext);
	return active;
};

export const useSetActiveBookmark = () => {
	const setActive = useContext(BookmarkSelectorActionContext);
	if (!setActive) {
		throw new Error(
			"useActiveBookmark can only be used at the descendent of BookmarkSelectorCOntextProvider",
		);
	}
	return setActive;
};
