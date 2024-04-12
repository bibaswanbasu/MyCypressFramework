//[Pre-Requisite: Install ajv library]

//import the library
// create a instance of the libarry

describe("API Schema Validation", () => {
  it("Schema Validation", () => {
    cy.request({
      method: "GET",
      url: "https://fakestoreapi.com/products",
      qs: { limit: 1 },
    }).then((response) => {
      const schema = {
        // type: "array",
        items: [
          {
            type: "object",
            properties: {
              id: {
                type: "integer",
              },
              title: {
                type: "string",
              },
              price: {
                type: "number",
              },
              description: {
                type: "string",
              },
              category: {
                type: "string",
              },
              image: {
                type: "string",
              },
              rating: {
                type: "object",
                properties: {
                  rate: {
                    type: "number",
                  },
                  count: {
                    type: "integer",
                  },
                },
                required: ["rate", "count"],
              },
            },
            required: [
              "id",
              "title",
              "price",
              "description",
              "category",
              "image",
              "rating",
            ],
          },
        ],
      }; //schema end
      cy.validateSchema(schema, response);
    });
  });
});
