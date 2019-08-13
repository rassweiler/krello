const initialState = [
	{
		id: 0,
		title: "Default List",
		cards: [
			{
				id: 0,
				text: "Default card text"
			},
			{
				id: 1,
				text: "Default card text pt 2"
			}
		]
	}
];
const listReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
