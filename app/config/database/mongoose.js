import mongoose from 'mongoose';

const connectionString = process.env.MONGO_URI;

const configure = () => {
    
    mongoose.Promise = global.Promise;

    mongoose.connect(connectionString);

    mongoose.connection.on('error', (err) => {
        console.error('connection error: ', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('disconnected');
    });

    process.on('SIGINT', () => {

        mongoose.connection.close(() => {
            console.error('connection closed through app termination');
            process.exit(0);
        });

    });

    return mongoose.connection;
}

export default configure;