const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an employee object with a name, id, and email", () => {
      const employee = new Employee("John", 123, "john@example.com");

      expect(employee.name).toEqual(expect.any(String));
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.email).toEqual(expect.any(String));
    });
  });

  describe("getName", () => {
    it("should return the name of the employee", () => {
      const employee = new Employee("John", 123, "john@example.com");

      expect(employee.getName()).toEqual(expect.any(String));
    });
  });

  describe("getId", () => {
    it("should return the ID of the employee", () => {
      const employee = new Employee("John", 123, "john@example.com");

      expect(employee.getId()).toEqual(expect.any(Number));
    });
  });

  describe("getEmail", () => {
    it("should return the email of the employee", () => {
      const employee = new Employee("John", 123, "john@example.com");

      expect(employee.getEmail()).toEqual(
        expect.stringContaining(employee.email.toString())
      );
    });
  });

  describe("getRole", () => {
    it("should return 'Employee'", () => {
      const employee = new Employee("John", 123, "john@example.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
