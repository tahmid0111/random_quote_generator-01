import { describe, expect, it } from "vitest";
import { getQuoteId } from "../js/utils";

// describe("getQuoteId()", () => {
//   it("should return the correct day of the year for valid dates", () => {
//     expect(getQuoteId()).toBe(1);
//     expect(getQuoteId()).toBe(79);
//     expect(getQuoteId()).toBe(365);
//   });

//   it("should handle leap years correctly", () => {
//     expect(getQuoteId(new Date(2024, 1, 29))).toBe(60);
//   });

//   it("should handle invalid dates gracefully", () => {
//     expect(getQuoteId(new Date(-1, 0, 1))).toBe(undefined); // Or handle errors as needed
//   });

//   it("should return the correct values for minimum and maximum days", () => {
//     expect(getQuoteId(new Date(2023, 0, 1))).toBe(1);
//     expect(getQuoteId(new Date(2023, 11, 31))).toBe(365);
//   });

//   it("should handle large input values efficiently", () => {
//     // Test with a large number of input dates
//   });

// Add more test cases as needed to cover edge cases, performance, and robustness
// });
