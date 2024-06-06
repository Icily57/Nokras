import "dotenv/config";
import { Client } from "pg";
import * as schema from "../schema";
import { sync as drizzleSync, drizzle } from "drizzle-orm/node-postgres";

export const client = new Client({
    connectionString: process.env.Database_URL ,   
});

export const migrate = async () => {
    try {
        await client.connect();  // Connect to the database
        await drizzleSync(client, { schema, logger: true });  // Synchronize schema
    } catch (error) {
        console.error("Migration failed:", error);
        process.exit(1);
    } finally {
        await client.end();
    }
};

export const main = async () => {
    try {
        await client.connect();  // Connect to the database
        const db = drizzle(client, { schema, logger: true });  // Create a drizzle instance
        await drizzleSync(client, { schema, logger: true });  // Synchronize schema
        // You can perform more operations here using `db`
    } catch (error) {
        console.error("Main execution failed:", error);
        process.exit(1);
    } finally {
        await client.end();
    }
};

export default client;




// import { Client } from "pg";
// import * as schema from "../schema";
// import { sync as drizzleSync, drizzle } from "drizzle-orm/node-postgres";

// export const client = new Client({
//     connectionString: process.env.Database_URL as string,   
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
