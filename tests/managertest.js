// Import Manager constructor
const Manager = require("../lib/Manager");

// Test creating a Manager object
test("should create a Manager object", () => {
const manager = new Manager("John", 123, "john@example.com", 4);

expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Test getting the role from getRole()
test("should get the role of the employee", () => {
const manager = new Manager("John", 123, "john@example.com");

expect(manager.getRole()).toEqual("Manager");
});