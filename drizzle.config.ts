import { defineConfig} from 'drizzle-kit';
import "dotenv/config";
import {} from "module";
// export default defineConfig({
//     schema: './src/schema.ts',
//     out: './drizzle',
//     dialect: 'postgresql', 
//     dbCredentials: {
//     url: process.env.Database_URL as string,
// },
// } as Config);
export default defineConfig({
    dialect: "postgresql",  
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    dbCredentials: {
                url: process.env.DATABASE_URL as string,
            },
   
    verbose: true,
    strict: true,

})
