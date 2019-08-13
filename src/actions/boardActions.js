export const addBoard = title => {
	return {
		type: "ADDBOARD",
		payload: title
	};
};

export const addList = (title, board) => {
	return {
		type: "ADDLIST",
		payload: { title, board }
	};
};

export const addCard = (title, board, list) => {
	return {
		type: "ADDCARD",
		payload: { title, board, list }
	};
};

export const viewBoard = board => {
	return {
		type: "VIEWBOARD",
		payload: board
	};
};
