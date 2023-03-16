// Import the Engineer constructor
const Engineer = require("../lib/Engineer");

// Create an engineer object
describe("Engineer", () => {
describe("Initialization", () => {
it("should create an object with name, id, email and github username", () => {
const engineer = new Engineer(
"John",
123,
"john@example.com",
"JohnSmith09"
);
expect(engineer.name).toEqual("Nicole");
expect(engineer.id).toEqual(90);
expect(engineer.email).toEqual("nicole.elisaw@gmail.com");
expect(engineer.github).toEqual("nicolewallace09");
});
});

// Test to get the Github username
describe("getGithub", () => {
it("should get the Github username of the engineer", () => {
const engineer = new Engineer(
    "John",
    123,
    "john@example.com",
    "JohnSmith09"
);
expect(engineer.getGithub()).toEqual(engineer.github);
});
});

// Test to get the role of the engineer
describe("getRole", () => {
it("should return 'Engineer'", () => {
const engineer = new Engineer(
    "John",
    123,
    "john@example.com",
    "JohnSmith09"
);
expect(engineer.getRole()).toEqual("Engineer");
});
});
});