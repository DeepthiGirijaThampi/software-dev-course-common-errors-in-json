/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
`;

// My List of Fixes:
//-----------------------------------------------------------------
//1)Missing comma between "checkInDate" and "checkOutDate" - 
//JSON requires commas between key-value pairs 
//FIX : Added a comma
//2) "age": undefined
//undefined is not a valid JSON data type (JavaScript only)
//Replaced with null
//3) Trailing comma in "amenities": [...]
//JSON does not allow trailing commas in arrays or objects
// Removed the trailing comma after "Parking"
//4)Missing quotes around name in the first guest object
//JSON requires all keys and string values to be in double quotes
//Wrapped key in "name"

// ============================================
// Answers for the  Follow-Up Questions
// ============================================
//1️⃣ What tools or techniques did you use to identify the errors?
//I used an online JSON validator (like jsonlint.com) 
//2️⃣ How did you confirm that your corrected JSON file was valid?
//I pasted the corrected version into the JSON linter, which showed no syntax errors. 
//3️⃣ Which errors were the most difficult to spot? Why?
//The missing comma between checkInDate and checkOutDate & the comma after parking in amenities were tricky because the keys looked visually aligned and the comma couldnt be noticed early.
//4️⃣ What strategies can help you avoid these kinds of errors in the future?
//Using a JSON linter ,avoid mixing JSON with JavaScript syntax ,validating often with smaller chunks of data while building can help avoid these kind of errors.

//---------------------------------------------------------



// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

2️⃣ How did you confirm that your corrected JSON file was valid?

3️⃣ Which errors were the most difficult to spot? Why?

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
*/
