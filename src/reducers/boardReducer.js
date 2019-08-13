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
	let newState = { ...state };
	switch (action.type) {
		case "ADDBOARD":
			const board = {
				id: Math.floor(Math.random() * 1000),
				title: action.payload,
				lists: []
			};
			newState.boards = [...newState.boards, board];
			return newState;
		case "ADDLIST":
			const list = {
				id: Math.floor(Math.random() * 1000),
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
			console.log("Add card:", action.payload);
			const card = {
				id: Math.floor(Math.random() * 1000),
				text: action.payload.title
			};
			newState = state.boards.map(board => {
				if (board.id === action.payload.board) {
					board.lists.map(list => {
						if (list.id === action.payload.list) {
							return {
								...list,
								cards: [...list.cards, card]
							};
						} else {
							//return list;
						}
					});
				} else {
					//return board;
				}
			});
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
