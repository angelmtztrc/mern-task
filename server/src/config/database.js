import { connect } from 'mongoose';

const database = async () => {
  try {
    await connect(process.env.DATABASE_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('DATABASE CONNECTED');
  } catch (error) {
    console.log('SOMETHING WENT WRONG', error);
    process.exit(1);
  }
};

export default database;
