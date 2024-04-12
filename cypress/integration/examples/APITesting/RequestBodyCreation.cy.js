/// <reference types="Cypress" />

function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLabcdefghijklmn";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  console.log(result);
  return result;
}

function generateRandomInteger(length) {
  // Validate the length parameter
  if (typeof length !== "number" || length <= 0) {
    throw new Error("Length must be a positive integer");
  }

  // Calculate the maximum and minimum possible values based on the length
  const minValue = Math.pow(10, length - 1);
  const maxValue = Math.pow(10, length) - 1;

  // Generate a random number within the specified range
  const randomNumber =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

  // Convert the number to string
  const randomInteger = randomNumber.toString();

  // Return the generated random integer
  console.log(randomInteger);
  return randomInteger;
}

describe("Way to Provide Request Body", () => {
  it("Approach1- Hard Coding the Body", () => {
    const reqBody = [
      {
        id: 1321,
        username: "basubib",
        firstName: "Bibra",
        lastName: "Basu",
        email: "bibra@gmail.com",
        password: "password@#43",
        phone: "987465123",
        userStatus: 0,
      },
    ];

    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user/createWithList",
      body: reqBody,
    }).then((response) => {
      console.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("ok");
    });
  });

  it("Approach2- Randomly Generated", () => {
    const reqBody = [
      {
        id: generateRandomInteger(4),
        username: generateRandomString(6),
        firstName: generateRandomString(5),
        lastName: generateRandomString(6),
        email: "testemail." + generateRandomInteger(4) + "@gmail.com",
        password: "password@#43",
        phone: generateRandomInteger(10),
        userStatus: 0,
      },
    ];

    console.log(reqBody);

    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user/createWithList",
      body: reqBody,
    }).then((response) => {
      console.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("ok");
    });
  });

  it("Approach3- Using Fixture", () => {
    cy.fixture("userdetails_reqbody.json").then((data) => {
      const requestBody = data;
      console.log(requestBody);

      cy.request({
        method: "POST",
        url: "https://petstore.swagger.io/v2/user/createWithList",
        body: requestBody,
      }).then((response) => {
        console.log(response.body);
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("ok");

        //Validate the property from response
        expect(response.body).has.property("message", "ok");
        expect(response.body).to.have.property("code", 200);
      });
    });
  });
});
