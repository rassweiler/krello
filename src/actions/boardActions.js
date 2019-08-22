import uuid from "uuidv4";

export const addBoard = title => {
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
	draggableId,
	type,
	boardId
) => {
	return {
		type: "SORT",
		payload: {
			idStart,
			idEnd,
			indexStart,
			indexEnd,
			draggableId,
			type,
			boardId
		}
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
