
import { NextApiRequest, NextApiResponse } from "next";
import { Polybase } from "@polybase/client";

// For connecting to the database
import db from "../../../polybase/config";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // TODO: Add code to fetch data from database
    // const data = ...

    // Send data and message as response
    res.status(200).json({ message: 'Data fetched successfully', data });
  } else if (req.method === 'POST') {
    // Get new data from request body
    // const newData = req.body;

    // TODO: Add code to store new data in database
    /*
    Info: URL to the database
    URL : /api/schemas/SampleSchema
    */
    const createResponse = await db.applySchema(`
      
      @public    
      collection SampleCollection1 {
        id: string;
        name: string;
        age: number;
        

        constructor(id: string, name: string, age: number) {
            this.id = id;
            this.name = name;
            this.age = age;
          
        }
      }
    `);

    // Send success response
    res
      .status(200)
      .json({ message: "Database Collections created successfully."});
    console.log(res);
  } else if (req.method === 'PUT') {
    // Get updated data from request body
    const updatedData = req.body;

    // TODO: Add code to update data in database

    // Send success response
    res.status(200).json({ message: 'Data updated successfully' });
  } else if (req.method === 'DELETE') {
    // Get ID of data to delete from request body
    const id = req.body.id;

    // TODO: Add code to delete data from database

    // Send success response
    res.status(200).json({ message: 'Data deleted successfully' });
  } else {
    res.status(400).json({ message: "Invalid request method." });
  }
}
















// import { NextApiRequest, NextApiResponse } from "next";
// import { Polybase } from "@polybase/client";

// // For connecting to the database
// import db from "../../../polybase/config";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     /* 
//     Info: URL to the database
//     URL : /api/schemas/SampleSchema
//     */
//     const createResponse = await db.applySchema(`
      
//       @public    
//       collection SampleCollection1 {
//         id: string;
//         name: string;
//         age: number;
        

//         constructor(id: string, name: string, age: number) {
//             this.id = id;
//             this.name = name;
//             this.age = age;
          
//         }
//       }
//     `);

//     res
//       .status(200)
//       .json({ message: "Database SampleCollections created successfully." });
//     console.log(res);
//   } else {
//     res.status(400).json({ message: "Invalid request method." });
//   }
// }
