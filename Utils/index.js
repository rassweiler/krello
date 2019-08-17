export const findByTestData = (component, data) => {
	const wrapper = component.find(`[test-data='${data}']`);
	return wrapper;
};
