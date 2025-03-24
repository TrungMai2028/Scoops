import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT } = process.env;


// create a SQL connection using our env variables
export const sql = neon(
    `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`,
)