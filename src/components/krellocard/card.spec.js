import React from "react";
import { shallow } from "enzyme";
import { findByTestData } from "../../../Utils";
import KrelloCard from "./index";

const setupTest = (props = {}) => {
	const component = shallow(<KrelloCard {...props} />);
	return component;
};

describe("KrelloCard component", () => {
	let component;
	beforeEach(() => {
		component = setupTest();
	});
	it("Should contain a main container", () => {
		expect(findByTestData(component, "card-container").length).toBe(1);
	});
	it("Should contain a text container", () => {
		expect(findByTestData(component, "card-text").length).toBe(1);
	});
	it("Should contain a menu container", () => {
		expect(findByTestData(component, "card-menu").length).toBe(1);
	});
	describe("Have props", () => {
		let component;
		beforeEach(() => {
			const props = {
				text: "Test Text"
			};
			component = setupTest(props);
		});
		it("Should have text in the container", () => {
			expect(findByTestData(component, "card-text").text()).not.toBe("");
		});
	});
	describe("Have no props", () => {
		let component;
		beforeEach(() => {
			component = setupTest();
		});
		it("Should not have text in the container", () => {
			expect(findByTestData(component, "card-text").text()).toBe("");
		});
	});
});
