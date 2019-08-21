const initialState = {};

const boardReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADDBOARD": {
			const { title, boardId } = action.payload;
			const board = {
				id: boardId,
				title: title,
				lists: []
			};
			return { ...state, [boardId]: board };
		}
		case "REMOVEBOARD": {
			const { boardId } = action.payload;
			const newState = state;
			delete newState[boardId];
			return newState;
		}
		case "EDITBOARD": {
			const { title, boardId } = action.payload;
			if (title) {
				const board = state[boardId];
				board.title = title;
				return { ...state, [boardId]: board };
			}
			return state;
		}
		case "ADDLIST": {
			const { boardId, listId } = action.payload;
			const board = state[boardId];
			board.lists = [...board.lists, listId];
			return { ...state, [boardId]: board };
		}
		case "REMOVELIST": {
			const { listId, boardId } = action.payload;
			const board = state[boardId];
			board.lists = board.lists.filter(id => id !== listId);
			return { ...state, [boardId]: board };
		}
		case "SORTBOARD": {
			const {
				idStart,
				idEnd,
				indexStart,
				indexEnd,
				listId,
				type
			} = action.payload;
			//Same list
			if (idStart === idEnd) {
				const list = state.find(list => idStart === list.id);
				const card = list.cards.splice(indexStart, 1);
				list.cards.splice(indexEnd, 0, ...card);
				return { ...state, [idStart]: list };
			}
			return state;
		}
		default:
			return state;
	}
};

export default boardReducer;
