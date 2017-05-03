import path from 'path';
import hbs from 'hbs';

import * as helpers from '@services/templating/helpers';
import * as partials from '@services/templating/partials';

const viewPath = path.resolve(
    process.env.BASE,
    process.env.APP,
    'views'
);

const partialPath = path.resolve(
    process.env.BASE,
    process.env.APP,
    'views/partials'
);

function registerHelpers(app, router){
    let blockHelper = helpers.blockHelper();

    //order is important for this helper
    hbs.registerHelper('extend', blockHelper.extendSection);
    hbs.registerHelper('section', blockHelper.addToSection);
    

    hbs.registerHelper('dump', helpers.dump);
    hbs.registerHelper('url', helpers.getUrl(router));

    app.use((req, res, next) => {
        hbs.registerHelper('translate', helpers.getTranslation(res));
        hbs.registerHelper('absoluteUrl', helpers.getAbsoluteUrl(req));
        
        next();
    });
}

function registerPartials(){
    const partialsHub = () => {
        hbs.registerPartial('localesPartial', partials.locales);
    }

    hbs.registerPartials(partialPath, partialsHub);
}

const configure = (app, router) => {
    registerHelpers(app, router);
    registerPartials();

    app.set('views', viewPath);
    app.set('view engine', 'hbs');
}

export default configure;

