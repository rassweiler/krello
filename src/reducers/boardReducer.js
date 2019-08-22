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
		case "SORT": {
			const {
				idStart,
				idEnd,
				indexStart,
				indexEnd,
				draggableId,
				type,
				boardId
			} = action.payload;

			if (type === "list") {
				const board = state[boardId];
				const lists = board.lists;
				if (lists) {
					const list = lists.splice(indexStart, 1);
					lists.splice(indexEnd, 0, ...list);
					board.lists = lists;
					return { ...state, [boardId]: board };
				}
			}
			return state;
		}
		default:
			return state;
	}
};

export default boardReducer;
