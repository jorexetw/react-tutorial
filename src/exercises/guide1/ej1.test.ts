import { max } from "./ej1"

describe("guide 1 tests", () => {
    it("should return max number", () => {
        expect(max(7, 5)).toBe(7);
    })

    it("should return max number", () => {
        expect(max(2, 5)).toBe(5);
    })
})