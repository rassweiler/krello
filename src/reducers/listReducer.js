const initialState = {};
const listReducer = (state = initialState, action) => {
	switch (action.type) {
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
			//Same list
			if (type === "list") {
				return state;
			}
			if (idStart === idEnd) {
				const list = state[idStart];
				const card = list.cards.splice(indexStart, 1);
				list.cards.splice(indexEnd, 0, ...card);
				return { ...state, [idStart]: list };
			} else {
				const startList = state[idStart];
				const endList = state[idEnd];
				const card = startList.cards.splice(indexStart, 1);
				endList.cards.splice(indexEnd, 0, ...card);
				return { ...state, [idStart]: startList, [idEnd]: endList };
			}
			return state;
		}
		case "ADDLIST": {
			const { listId, title, boardId } = action.payload;
			const list = {
				id: listId,
				title: title,
				board: boardId,
				cards: []
			};
			return { ...state, [listId]: list };
		}
		case "REMOVELIST": {
			const { listId } = action.payload;
			const newState = state;
			delete newState[listId];
			return newState;
		}
		case "EDITLIST": {
			const { listId, title } = action.payload;
			if (title) {
				const list = state[listId];
				list.title = title;
				return { ...state, [listId]: list };
			}
			return state;
		}
		case "ADDCARD": {
			const { listId, cardId } = action.payload;
			const list = state[listId];
			list.cards = [...list.cards, cardId];
			return { ...state, [listId]: list };
		}
		case "REMOVECARD": {
			const { listId, cardId } = action.payload;
			const list = state[listId];
			list.cards = list.cards.filter(id => id !== cardId);
			return { ...state, [listId]: list };
		}
		default:
			return state;
	}
};

export default listReducer;
