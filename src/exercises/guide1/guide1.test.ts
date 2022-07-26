import { max } from "./guide1"

describe("guide 1 tests", () => {
    it("should return max number", () => {
        expect(max(7, 5)).toBe(7);
        expect(max(2, 5)).toBe(5);
    })
})