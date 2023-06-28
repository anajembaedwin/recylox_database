// import { NextApiRequest, NextApiResponse } from "next";
import { Polybase } from "@polybase/client";

// For connecting to the database
import db from "../../../polybase/config";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // TODO: Add code to fetch data from database
    // const data = ...

    // Send data and message as response
    res.status(200).json({ message: 'Data fetched successfully'});
  } else if (req.method === 'POST') {
    // Get new data from request body
    const newData = req.body;

    // TODO: Add code to store new data in database
    const createResponse = await db.applySchema(`
      @public
      collection User {
        id: string;
        name: string;
        email: string;
        walletAddress: string;
        verification: boolean;

        constructor (id: string, name: string, email: string, walletAddress: string, verification: boolean) {
          this.id = id;
          this.name = name;
          this.email = email;
          this.walletAddress = walletAddress;
          this.verification = verification;
        }
      }

      @public
      collection Company {
        id: string;
        companyName: string;
        email: string;
        walletAddress: string;
        minimumWeightRequired: number;
        maximumPricePerKilogram: number;
        verification: boolean;

        constructor (id: string, companyName: string, email: string, walletAddress: string, minimumWeightRequired: number, maximumPricePerKilogram: number, verification: boolean) {
          this.id = id;
          this.companyName = companyName;
          this.email = email;
          this.walletAddress = walletAddress;
          this.minimumWeightRequired = minimumWeightRequired;
          this.maximumPricePerKilogram = maximumPricePerKilogram;
          this.verification = verification;
        }
      }
    `);

    // Create an instance of the collection and save the new data
    if (newData.collection === 'User') {
      const collection = new Polybase.Collection('User');
      const newItem = new collection.constructor(
        newData.id,
        newData.name,
        newData.email,
        newData.walletAddress,
        newData.verification
      );
      await collection.save(newItem);
    } else if (newData.collection === 'Company') {
      const collection = new Polybase.Collection('Company');
      const newItem = new collection.constructor(
        newData.id,
        newData.companyName,
        newData.email,
        newData.walletAddress,
        newData.minimumWeightRequired,
        newData.maximumPricePerKilogram,
        newData.verification
      );
      await collection.save(newItem);
    } else {
      return res.status(400).json({ message: 'Invalid collection name' });
    }

    // Send success response
    res.status(200).json({ message: "Data stored successfully" });
  } else if (req.method === 'PUT') {
    // Get updated data from request body
    const updatedData = req.body;

    // TODO: Add code to update data in database
    if (updatedData.collection === 'User') {
      const collection = new Polybase.Collection('User');
      const item = await collection.findOne({ id: updatedData.id });
      if (item) {
        item.name = updatedData.name;
        item.email = updatedData.email;
        item.walletAddress = updatedData.walletAddress;
        item.verification = updatedData.verification;
        await item.save();
        res.status(200).json({ message: 'Data updated successfully' });
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } else if (updatedData.collection === 'Company') {
      const collection = new Polybase.Collection('Company');
      const item = await collection.findOne({ id: updatedData.id });
      if (item) {
        item.companyName = updatedData.companyName;
        item.email = updatedData.email;
        item.walletAddress = updatedData.walletAddress;
        item.minimumWeightRequired = updatedData.minimumWeightRequired;
        item.maximumPricePerKilogram = updatedData.maximumPricePerKilogram;
        item.verification = updatedData.verification;
        await item.save();
        res.status(200).json({ message: 'Data updated successfully' });
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } else {
      return res.status(400).json({ message: 'Invalid collection name' });
    }
  } else if (req.method === 'DELETE') {
    // Get ID of data to delete from request body
    const { id, collection } = req.body;

    // TODO: Add code to delete data from database
    if (collection === 'User') {
      const collection = new Polybase.Collection('User');
      const item = await collection.findOne({ id });
      if (item) {
        await item.delete();
        res.status(200).json({ message: 'Data deleted successfully' });
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } else if (collection === 'Company') {
      const collection = new Polybase.Collection('Company');
      const item = await collection.findOne({ id });
      if (item) {
        await item.delete();
        res.status(200).json({ message: 'Data deleted successfully' });
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } else {
      return res.status(400).json({ message: 'Invalid collection name' });
    }
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
