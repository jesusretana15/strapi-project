import { parse } from "pg-connection-string";
import { Knex } from "knex";


const { host, port, database, user, password } = parse(process.env.DATABASE_URL || "");

export default (): { connection: Knex.Config } => ({
  connection: {
    client: "postgres",
    connection: {
      host,
      port: port ? parseInt(port, 10) : undefined,
      database,
      user,
      password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    pool: { min: 2, max: 10 },
    debug: false,
  },
});

