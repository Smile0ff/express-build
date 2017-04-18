import path from "path";

import express from "express";

import helmet from "helmet";
import favicon from "serve-favicon";
import logger from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import bodyParser from "body-parser";
import NamedRouter from "named-routes";

import { config as dotEnvConfig } from "dotenv";
import i18n from "@config/i18n"; 
import registerHBSHelpers from "@viewHelpers/registerHBSHelpers";
import routes from "@routes/";
import { notFound, errorHandler } from "@routes/error";

dotEnvConfig();

const app = express();
const router = express.Router();
const namedRouter = new NamedRouter();

namedRouter.extendExpress(router);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

registerHBSHelpers(router);

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(helmet());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("i18n"));
app.use(session({
    secret: "qweqaz123456",
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: true,
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 60 * 1000)
    }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(i18n.init);

app.use("/", routes(router));

app.use(notFound);
app.use(errorHandler);

module.exports = app;
