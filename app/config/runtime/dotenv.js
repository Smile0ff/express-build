import path from 'path';
import dotenv from 'dotenv';

const env = process.env.NODE_ENV;
const envFileName = '.env.' + env;

const pathToEnv = path.resolve('./', envFileName);

dotenv.config({
    path: path.resolve('./', pathToEnv)
});

export default dotenv;