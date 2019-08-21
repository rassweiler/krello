import uuid from "uuidv4";

export const addBoard = title => {
	console.log("At action addBoard");
	if (title) {
		return {
			type: "ADDBOARD",
			payload: { title, boardId: uuid() }
		};
	} else {
		return {
			type: ""
		};
	}
};

export const editBoard = (title, boardId) => {
	return {
		type: "EDITBOARD",
		payload: { title, boardId }
	};
};

export const removeBoard = boardId => {
	return {
		type: "REMOVEBOARD",
		payload: { boardId }
	};
};

export const activeBoard = boardId => {
	return {
		type: "ACTIVEBOARD",
		payload: { boardId }
	};
};

export const sortBoard = (
	idStart,
	idEnd,
	indexStart,
	indexEnd,
	listId,
	type
) => {
	return {
		type: "SORTBOARD",
		payload: { idStart, idEnd, indexStart, indexEnd, listId, type }
	};
};

export const sortBoardList = (
	idStart,
	idEnd,
	indexStart,
	indexEnd,
	boardId,
	type
) => {
	return {
		type: "SORTBOARDLIST",
		payload: { idStart, idEnd, indexStart, indexEnd, boardId, type }
	};
};
