import React, { createContext, useState } from 'react';

const SideNavContext = createContext({
	hidden: false,
	toggleHidden: () => {}
});

const SideNavProvider = ({ children }) => {
	const [hidden, setHidden] = useState(true);
	const toggleHidden = () => setHidden(!hidden);

	return (
		<SideNavContext.Provider value={{
			hidden,
			toggleHidden
		}}>
			{children}
		</SideNavContext.Provider>
	)
}

export {
	SideNavContext,
	SideNavProvider
};
