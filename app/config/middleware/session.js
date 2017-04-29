import session from 'express-session';

const configure = () => {

    return session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            domain: '.test.com',
            maxAge: 24 * 60 * 60
        }
    });

}

export default configure;