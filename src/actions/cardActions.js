import uuid from "react-native-uuid";

export const addCard = (text, listId) => {
	return {
		type: "ADDCARD",
		payload: { cardId: uuid.v4(), listId, text }
	};
};

export const removeCard = (boardId, listId, cardId) => {
	return {
		type: "REMOVECARD",
		payload: { cardId, listId, boardId }
	};
};

export const editCard = (text, boardId, listId, cardId) => {
	return {
		type: "EDITCARD",
		payload: { cardId, listId, boardId, text }
	};
};
