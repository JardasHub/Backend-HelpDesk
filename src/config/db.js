import { Sequelize } from "sequelize";

const database = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

async function connectDatabase() {
  try {
    await database.authenticate();
    console.log("Conectado");
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

export { database, connectDatabase };