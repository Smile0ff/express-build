import path from 'path';

import express from 'express';

import NamedRouter from 'named-routes';

import configuredHelmet from '@config/middleware/helmet';
//import configuredFavicon from '@config/middleware/favicon';
import configuredLogger from '@config/middleware/logger';
import configuredBodyParser from '@config/middleware/bodyParser';
import configuredCookie from '@config/middleware/cookie';
import configuredSession from '@config/middleware/session';
import configuredStatic from '@config/middleware/static';

import localization from '@middleware/localization';

import registerHandlebarsHelpers from '@viewHelpers/registerHandlebarsHelpers';

import routes from '@routes';
import { notFound, errorHandler } from '@routes/error';

const app = express();
const router = express.Router();
const namedRouter = new NamedRouter();

namedRouter.extendExpress(router);

const bodyParser = configuredBodyParser();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'hbs');

registerHandlebarsHelpers(router);

//app.use(favicon(path.resolve(__dirname, 'public/favicon.ico')));
app.use(configuredHelmet());
app.use(configuredLogger());
app.use(bodyParser.json);
app.use(bodyParser.urlencoded);
app.use(configuredCookie());
app.use(configuredSession());
app.use(configuredStatic())


app.use(localization);



app.use('/', routes(router));

app.use(notFound);
app.use(errorHandler);

module.exports = app;
