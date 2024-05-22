
import run from 'sequelize-csv-auto';

run(5, "Lake_County_Health", {
    username: '[INSERT USERNAME]',
    password: '[INSERT PASSWORD]',
    host: '[INSERT HOST - for example 00.000.000.00]',
    database: '[INSERT DATABASE]',
    port: '[INSERT PORT]',
    dialect: 'postgres',
    logging: false
  });