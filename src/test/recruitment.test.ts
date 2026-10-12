import { describe, expect, it } from "vitest";
import { healthcareRoleTitles, recruitmentDestination } from "@/lib/recruitment";

describe("Healthcare recruitment scope", () => {
  it("recruits for Germany only", () => {
    expect(recruitmentDestination).toBe("Germany");
  });
  it("includes only the requested healthcare professional categories", () => {
    expect(healthcareRoleTitles).toEqual([
      "Registered Nurses (RN, KRCHN/BSN)", "Clinical Officers", "Health Service Support",
      "Medical Doctors", "Perioperative Nurses", "Psychiatric Nurses",
    ]);
  });
});