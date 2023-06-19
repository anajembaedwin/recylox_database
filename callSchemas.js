const axios = require("axios");

// List all your API endpoints here
const apiEndpoints = [
  // GET request to fetch data from the database
  {
    method: "GET",
    endpoint: "/api/schemas/reccoinTestSchema",
  },
  // POST request to store new data in the database
  {
    method: "POST",
    endpoint: "/api/schemas/reccoinTestSchema",
    data: {
      collection: "User", // or "Company"
      id: "123",
      name: "John Doe",
      email: "john@example.com",
      walletAddress: "0x123456789",
      verification: true,
    },
  },
  // PUT request to update existing data in the database
  {
    method: "PUT",
    endpoint: "/api/schemas/reccoinTestSchema",
    data: {
      collection: "User", // or "Company"
      id: "123",
      name: "John Doe",
      email: "john.doe@example.com",
      walletAddress: "0x987654321",
      verification: false,
    },
  },
  // DELETE request to delete data from the database
  {
    method: "DELETE",
    endpoint: "/api/schemas/reccoinTestSchema",
    data: {
      collection: "User", // or "Company"
      id: "123",
    },
  },
  // Add more endpoints as needed
];

async function callSchemas() {
  try {
    for (const endpoint of apiEndpoints) {
      const { method, endpoint: apiEndpoint, data } = endpoint;
      const config = { method, url: `http://localhost:3000${apiEndpoint}` };

      if (data) {
        config.data = data;
      }

      const response = await axios(config);
      console.log(`API called: ${apiEndpoint}`);
      console.log(response.data); // Output or process the response data as needed
    }
  } catch (error) {
    console.error("Error calling APIs:", error);
  }
}

callSchemas();






// console.log("hello");
// const axios = require("axios");

// // List all your API endpoints here
// const apiEndpoints = [
//   // "/api/schemas/SampleSchema",
//   "/api/schemas/reccoinTestSchema",

//   // Add more endpoints as needed
// ];

// async function callSchemas() {
//   try {
//     for (const endpoint of apiEndpoints) {
//       const response = await axios.post(`http://localhost:3000${endpoint}`);
//       console.log(`API called: ${endpoint}`);
//       console.log(response.data); // Output or process the response data as needed
//     }
//   } catch (error) {
//     console.error("Error calling APIs:", error);
//   }
// }

// callSchemas();
