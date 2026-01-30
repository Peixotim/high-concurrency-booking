import { drizzle } from "drizzle-orm/node-postgres";
import { configDotenv } from "dotenv";

configDotenv();

const databaseUrl = process.env.DATABASE_URL;
const db = drizzle(databaseUrl!);

export default db;
