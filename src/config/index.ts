const { PORT, DB_PORT, DB_NAME, DB_HOST } = process.env;

const database = {
  port: parseInt(DB_PORT, 10) || 34017,
  host: DB_HOST || 'localhost',
  name: DB_NAME || 'butler',
};

const host = {
  port: parseInt(PORT, 10) || 8035,
};

export default {
  database,
  host,
};
