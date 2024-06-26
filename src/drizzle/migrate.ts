//migration code
//
import "dotenv/config";
// import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

// import { db } from "./db";
import db, { client } from "./db";

async function migration() {
  console.log("=======Migrating Database=======");
  // await db.createSchema();
  await migrate(db, {
    migrationsFolder: __dirname + "/migrations",
  });

  await client.end();

  console.log("=======Migration Complete=======");

  process.exit(0);
}

// run the migration function and catch any errors
migration().catch((err) => {
  console.error(err);
  process.exit(0);
}); // run the migration function and catch any errors



// import { migrate as migrateFromMigrator } from "drizzle-orm/node-postgres/migrator";
// import { client, migrate as migrateFromDb, main } from "./db";

// async function runMigrations() {
//     await migrateFromDb();
// }

// async function runMain() {
//     await main();
// }

// runMigrations()
//     .then(() => {
//         console.log("Migrations completed successfully.");
//         return runMain();
//     })
//     .then(() => {
//         console.log("Main execution completed successfully.");
//         process.exit(0);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//         process.exit(1);
//     });





// // import nh from './db';
// // import "dotenv/config";
// // import { migrate } from "drizzle-orm/node-postgres/migrator";
// // import { client } from "./db";
// // import { migrate, main } from './db';

// // async function runMigrations() {
// //     await migrate();
// // }

// // async function runMain() {
// //     await main();
// // }

// // // Run migrations first
// // runMigrations()
// //     .then(() => {
// //         console.log("Migrations completed successfully.");
// //         // Then run main execution logic
// //         return runMain();
// //     })
// //     .then(() => {
// //         console.log("Main execution completed successfully.");
// //         process.exit(0);
// //     })
// //     .catch((error) => {
// //         console.error("Error:", error);
// //         process.exit(1);
// //     });

// // // export async function migration() {
// // //     try {
// // //         console.log("======== Migrations started ========")
// // //         await migrate(nh, { migrationsFolder: __dirname + "/migrations" });
// // //         console.log("======== Migrations ended ========")
// // //     } catch (error) {
// // //         console.error("Migration failed:", error);
// // //         process.exit(1);
// // //     } finally {
// // //         await client.end();
// // //     }
// // // }

// // // migration().catch((err) => {
// // //     console.error(err);
// // //     process.exit(1);
// // // });
