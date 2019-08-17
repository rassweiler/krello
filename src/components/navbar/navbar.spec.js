import React from "react";
import { shallow } from "enzyme";
import { findByTestData } from "../../../Utils";
import Navbar from "./index";

const setupTest = (props = {}) => {
	const component = shallow(<Navbar {...props} />);
	return component;
};

describe("Navbar component", () => {
	let component;
	beforeEach(() => {
		component = setupTest();
	});
	it("Should contain main container", () => {
		expect(findByTestData(component, "navbar-container").length).toBe(1);
	});
	it("Should contain a logo image", () => {
		expect(findByTestData(component, "navbar-image").length).toBe(1);
	});
	it("Should contain a menu", () => {
		expect(findByTestData(component, "navbar-menu-list").length).toBe(1);
	});
	it("Should contain greater than zero links", () => {
		expect(findByTestData(component, "navbar-menu-item").length).not.toBe(0);
	});
});
