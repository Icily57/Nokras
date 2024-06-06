import { defineConfig, Config } from 'drizzle-kit';

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
    schema: "./src/schema.ts",
    out: "./src/drizzle/migrations",
    dbCredentials: {
                host: 'localhost',
                user: 'postgres',
                password: '39047646',
                database: 'Nokras',
            },
   
    verbose: true,
    strict: true,

})
