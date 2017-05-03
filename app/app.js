import path from 'path';

import express from 'express';

import NamedRouter from 'named-routes';

import databaseConnect from '@config/database/mongoose';

//import configuredFavicon from '@config/middleware/favicon';
import configuredHelmet from '@config/middleware/helmet';
import configuredCors from '@config/middleware/cors';
import configuredLogger from '@config/middleware/logger';
import configuredBodyParser from '@config/middleware/bodyParser';
import configuredCookie from '@config/middleware/cookie';
import configuredSession from '@config/middleware/session';
import configuredStatic from '@config/middleware/static';

import configureTemplating from '@config/templating/hbs';

import subdomain from '@middleware/subdomain';
import localization from '@middleware/localization';

import routes from '@routes';
import { notFound, errorHandler } from '@routes/error';

const app = express();
const router = express.Router();
const namedRouter = new NamedRouter();

namedRouter.extendExpress(router);

const db = databaseConnect();

const bodyParser = configuredBodyParser();

configureTemplating(app, router);

//app.use(favicon(path.resolve(__dirname, 'public/favicon.ico')));
app.use(configuredHelmet());
app.use(configuredCors());
app.use(configuredLogger());
app.use(bodyParser.json);
app.use(bodyParser.urlencoded);
app.use(configuredCookie());
app.use(configuredSession(db));
app.use(configuredStatic())

app.use(subdomain);
app.use(localization);

app.use('/', routes(router));

app.use(notFound);
app.use(errorHandler);

module.exports = app;
