import session from 'express-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(session);

const cookie = process.env.COOKIE_SECRET;
const origin = process.env.ORIGIN;

const configure = (connection) => {

    return session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            domain: origin,
            maxAge: 60 * 60 * 24
        },
        store: new MongoStore({mongooseConnection: connection})
    });

}

export default configure;