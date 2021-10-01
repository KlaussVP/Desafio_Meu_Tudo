/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

const url = "http://localhost:8080/";

beforeEach(() => {
	cy.viewport(375, 812);
});

describe("Testing home button", () => {
	it("should go to home page", () => {
		const paths = ["", "values", "period", "result"];

		for (let i = 0; i < paths.length; i++) {
			cy.visit(`${url}${paths[i]}`);
			cy.get(".selHome").click({ multiple: true });

			cy.url().should("eq", url);
		}
	});
});

describe("Testing new loan button", () => {
	it("should click the new loan button and go to the next page to select value", () => {
		cy.visit(url);
		cy.contains("Novo Empréstimo").click();

		cy.url().should("include", "/values");
	});
});

describe("Testing return button", () => {
	it("should return to home page", () => {
		cy.visit(`${url}values`);
		cy.get("a[href*='/']").click();

		cy.url().should("eq", url);
	});

	it("should return to values page", () => {
		cy.visit(`${url}period`);
		cy.get("a[href*='/values']").click();

		cy.url().should("includes", "/values");
	});

	it("should return to period page", () => {
		cy.visit(`${url}result`);
		cy.get("a[href*='/period']").click();

		cy.url().should("includes", "/period");
	});
});

describe("Testing continue button", () => {
	it("should foward to period page", () => {
		cy.visit(`${url}values`);
		cy.get("button").contains("Continuar").click();

		cy.url().should("includes", "/period");
	});

	it("should foward to result page", () => {
		cy.visit(`${url}period`);
		cy.get("button").contains("Continuar").click();

		cy.url().should("includes", "/result");
	});
});

describe("Testing hire button", () => {
	it("should go back to home page", () => {
		cy.visit(`${url}result`);
		cy.get("a[href='/']").contains("Contratar").click();

		cy.url().should("eq", url);
	});
});
