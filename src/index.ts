
import app from './app';
import { prismaClient } from './database/prismaClient';
import './config/config';

async function main() {

  try {
    await prismaClient.$connect();
    console.log(`Successfuly connected to database!`);
  } catch (error) {
    console.log('Unable to connect to database:', error);
    process.exit(1);
  }

  try {
    app.listen(process.env.PORT, () =>
      console.log(`Server started on port ${process.env.PORT}.`),
    );
  } catch (error) {
    console.error('Unable to start the server:', error);
    process.exit(1);
  }
}

main();
