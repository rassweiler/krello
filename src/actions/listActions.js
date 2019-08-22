import uuid from "uuidv4";

export const sortList = (
	idStart,
	idEnd,
	indexStart,
	indexEnd,
	boardId,
	type
) => {
	return {
		type: "SORT",
		payload: { idStart, idEnd, indexStart, indexEnd, boardId, type }
	};
};

export const addList = (title, boardId) => {
	return {
		type: "ADDLIST",
		payload: { title, boardId, listId: uuid() }
	};
};

export const removeList = (boardId, listId) => {
	return {
		type: "REMOVELIST",
		payload: { boardId, listId }
	};
};

export const editList = (title, boardId, listId) => {
	return {
		type: "EDITLIST",
		payload: { title, boardId, listId }
	};
};
