import uuid from "uuidv4";

export const sortList = (idStart, idEnd, indexStart, indexEnd, id) => {
	return {
		type: "DRAGEND",
		payload: { idStart, idEnd, indexStart, indexEnd, id }
	};
};
