import formatTimeStrings from "../utils/formatTimeStrings";

describe("formatTimeStrings test", () => {
  it("returns None if no opening hours passed", () => {
    const expected = "None";
    const received = formatTimeStrings([]);

    expect(received).toEqual(expected);
  });

  it('returns "start" if only one opening hours', () => {
    const openingHours = ["12-00"];
    const expected = `${openingHours[0]}`;
    const received = formatTimeStrings(openingHours);

    expect(received).toEqual(expected);
  });

  it('returns "start - end" if more than one opening hours passed', () => {
    const openingHours = ["12-00", "16-00", "18-00"];
    const expected = `${openingHours[0]} - ${openingHours[2]}`;
    const received = formatTimeStrings(openingHours);

    expect(received).toEqual(expected);
  });
});
