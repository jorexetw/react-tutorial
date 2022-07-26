import { add, multiply } from "./example";

describe("example tests", () => {
    describe("add tests", () => {
        it("should add two numbers properly", () => {
            expect(add(2,3)).toEqual(5);
        });

        it("should add with 0 properly", () => {
            expect(add(2,0)).toEqual(2);
        });

        it("should add with negative numbers properly", () => {
            expect(add(-7,18)).toEqual(11);
        });
    });
    
    describe("multiply tests", () => {
        it("should multiply properly", () => {
            expect(multiply(5, 6)).toEqual(30);
        });

        it("should multiply negatives properly", () => {
            expect(multiply(-2, 3)).toEqual(-6);
            expect(multiply(-3, -9)).toEqual(27);
        });

        it("should multiply with 0 properly", () => {
            expect(multiply(5, 0)).toEqual(0);
        });
    });
});
