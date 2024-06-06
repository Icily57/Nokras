//creating objects
//importing the necessary modules
import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";

//import the client object
import { Client } from "pg";
import * as schema from "./schema";

//create a new client object
export const client = new Client({
  connectionString: process.env.DATABASE_URL as string, // or your connection string get the database url from the .env file
});

//main function
const main = async () => {
  //connect to the database
  await client.connect();
  // await drizzle(client).createSchema();
  // await client.end();
};
main(); //.catch(console.error); // run the main function and catch any errors

const db = drizzle(client, { schema, logger: true }); //create a new drizzle object

export default db; //export the drizzle object
// export default drizzle(client); //export the drizzle object

// main().catch(console.error); // run the main function and catch any errors






// import "dotenv/config";
// import { Client } from "pg";
// import * as schema from "../schema";
// import {drizzle} from 

// export const client = new Client({
//     connectionString: process.env.Database_URL ,   
// });

// export const migrate = async () => {
//     try {
//         await client.connect();  // Connect to the database
//         await drizzleSync(client, { schema, logger: true });  // Synchronize schema
//     } catch (error) {
//         console.error("Migration failed:", error);
//         process.exit(1);
//     } finally {
//         await client.end();
//     }
// };

// export const main = async () => {
//     try {
//         await client.connect();  // Connect to the database
//         const db = drizzle(client, { schema, logger: true });  // Create a drizzle instance
//         await drizzleSync(client, { schema, logger: true });  // Synchronize schema
//         // You can perform more operations here using `db`
//     } catch (error) {
//         console.error("Main execution failed:", error);
//         process.exit(1);
//     } finally {
//         await client.end();
//     }
// };

// export default client;




// // import { Client } from "pg";
// // import * as schema from "../schema";
// // import { sync as drizzleSync, drizzle } from "drizzle-orm/node-postgres";

// // export const client = new Client({
// //     connectionString: process.env.Database_URL as string,   
// // });

// // export const migrate = async () => {
// //     try {
// //         await client.connect();  // Connect to the database
// //         await drizzleSync(client, { schema, logger: true });  // Synchronize schema
// //     } catch (error) {
// //         console.error("Migration failed:", error);
// //         process.exit(1);
// //     } finally {
// //         await client.end();
// //     }
// // };

// // export const main = async () => {
// //     try {
// //         await client.connect();  // Connect to the database
// //         const db = drizzle(client, { schema, logger: true });  // Create a drizzle instance
// //         await drizzleSync(client, { schema, logger: true });  // Synchronize schema
// //         // You can perform more operations here using `db`
// //     } catch (error) {
// //         console.error("Main execution failed:", error);
// //         process.exit(1);
// //     } finally {
// //         await client.end();
// //     }
// // };

// // export default client;
