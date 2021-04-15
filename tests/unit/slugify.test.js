import slugify from "../../src/utils/slugify.js";

describe("slugify", () => {
    it("works as expected", () => {
        const text = "It works !";

        expect(slugify(text)).toMatch("it-works--");
    });

    it("works with number", () => {
        const text = 2;

        expect(slugify(text)).toMatch("2");
    });

    it("works with null", () => {
        const text = null;

        expect(slugify(text)).toMatch("");
    });
});
