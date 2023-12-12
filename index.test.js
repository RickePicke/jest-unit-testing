const { greeting, safeGreeting } = require(".");

describe("index.js", () => {
  describe("greeting", () => {
    it("should return greeting with given name", () => {
      expect(greeting("Jesper")).toEqual("Hello Jesper! 🤩");
    });
  });

  describe("safeGreeting", () => {
    it("should return greeting with given name", () => {
      expect(safeGreeting("Jesper")).toEqual("Hello Jesper! 🤩");
    });

    it("should return message when no name is given", () => {
      expect(safeGreeting("")).toEqual("No name provided! 💩");
      expect(safeGreeting(undefined)).toEqual("No name provided! 💩");
      expect(safeGreeting(null)).toEqual("No name provided! 💩");
      expect(safeGreeting()).toEqual("No name provided! 💩");
    });
  });
});
