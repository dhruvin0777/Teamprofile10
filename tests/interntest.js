// Import the Intern class from the corresponding module
const Intern = require("../lib/Intern");

// Test if creating an Intern object is successful
test("creates an Intern object", () => {
const intern = new Intern("John", 123, "john@example.com", "UCFSU");

// Check if the intern's school is of type string
expect(typeof intern.school).toBe("string");
});

// Test if the intern's school can be retrieved using the getSchool method
test("gets intern school", () => {
const intern = new Intern("John", 123, "john@example.com", "UCFSU");

// Check if the getSchool method returns a string that contains the intern's school
expect(intern.getSchool()).toContain(intern.school);
});

// Test if the intern's role can be retrieved using the getRole method
test("gets role of intern", () => {
const intern = new Intern("John", 123, "john@example.com", "UCFSU");

// Check if the getRole method returns "Intern"
expect(intern.getRole()).toBe("Intern");
});