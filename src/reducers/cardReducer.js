const initialState = {};
const cardReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADDCARD": {
			const { cardId, text, listId } = action.payload;
			const card = {
				id: cardId,
				text: text,
				list: listId
			};
			return { ...state, [cardId]: card };
		}
		case "REMOVECARD": {
			const { cardId } = action.payload;
			const newState = state;
			delete newState[cardId];
			return newState;
		}
		case "EDITCARD": {
			const { cardId, text } = action.payload;
			const card = state[cardId];
			card.text = text;
			return { ...state, [cardId]: card };
		}
		default:
			return state;
	}
};

export default cardReducer;
