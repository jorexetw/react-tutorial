import { add, multiply } from "./example";

describe("example tests", () => {
    it("should add properly", () => {
        expect(add(2,3)).toEqual(5);
    });

    it("should multiply properly", () => {
        expect(multiply(5, 6)).toEqual(30);
    })
});
