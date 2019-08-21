const initialState = [];

const boardListReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADDBOARD": {
			const { boardId } = action.payload;
			return [...state, boardId];
		}
		case "REMOVEBOARD": {
			const { boardId } = action.payload;
			const newState = state.filter(id => id !== boardId);
			return newState;
		}
		case "SORTBOARDLIST": {
			const {
				idStart,
				idEnd,
				indexStart,
				indexEnd,
				boardId,
				type
			} = action.payload;
			//Same list
			if (type === "board") {
				const newState = state;
				const board = newState.splice(indexStart, 1);
				newState.splice(indexEnd, 0, ...board);
				return newState;
			}
			return state;
		}
		default:
			return state;
	}
};

export default boardListReducer;
