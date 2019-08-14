const initialState = {
	display: -1,
	boards: [
		{
			id: 0,
			title: "Default Board",
			lists: [
				{
					id: 0,
					title: "Default List",
					cards: [
						{
							id: 0,
							text: "Default card text"
						}
					]
				}
			]
		}
	]
};

const boardReducer = (state = initialState, action) => {
	var newState = { ...state };
	switch (action.type) {
		case "ADDBOARD":
			const board = {
				id: action.payload.id,
				title: action.payload,
				lists: []
			};
			newState.boards = [...newState.boards, board];
			return newState;
		case "ADDLIST":
			const list = {
				id: action.payload.id,
				title: action.payload.title,
				cards: []
			};
			for (let i = 0; i < state.boards.length; ++i) {
				if (state.boards[i].id === action.payload.board) {
					newState.boards[i].lists = [...newState.boards[i].lists, list];
					return newState;
				}
			}
			return state;
		case "ADDCARD":
			const card = {
				id: action.payload.id,
				text: action.payload.title
			};
			for (let i = 0; i < state.boards.length; ++i) {
				if (state.boards[i].id === action.payload.board) {
					for (let o = 0; o < state.boards[i].lists.length; ++o) {
						if (state.boards[i].lists[o].id === action.payload.list) {
							console.log("Cards Before", newState.boards[i].lists[o].cards);
							newState.boards[i].lists[o].cards = [
								...newState.boards[i].lists[o].cards,
								card
							];
							console.log("Cards After", newState.boards[i].lists[o].cards);
							return newState;
						}
					}
				}
			}
			return newState;
		case "VIEWBOARD":
			newState = { ...state };
			newState.display = action.payload;
			return newState;
		default:
			return state;
	}
};

export default boardReducer;
