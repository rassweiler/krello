import uuid from "uuidv4";

export const addBoard = title => {
	const id = uuid();
	return {
		type: "ADDBOARD",
		payload: { title, id }
	};
};

export const addList = (title, board) => {
	const id = uuid();
	return {
		type: "ADDLIST",
		payload: { title, board, id }
	};
};

export const addCard = (title, board, list) => {
	const id = uuid();
	return {
		type: "ADDCARD",
		payload: { title, board, list, id }
	};
};

export const viewBoard = board => {
	return {
		type: "VIEWBOARD",
		payload: board
	};
};
